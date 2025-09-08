// Usa setTimeout/setInterval invece di node-schedule per la compatibilità senza dipendenze esterne

import fs from 'fs';
import path from 'path';
import '../lib/language.js';

// Percorso del file di persistenza
const SCHEDULE_FILE = path.join(process.cwd(), 'group_schedule.json');

// Carica gli orari salvati o inizializza un oggetto vuoto
let groupSchedule = {};
try {
    if (fs.existsSync(SCHEDULE_FILE)) {
        groupSchedule = JSON.parse(fs.readFileSync(SCHEDULE_FILE, 'utf8'));
    }
} catch (error) {
    console.error('Errore nel caricamento degli orari:', error);
}

// Salva gli orari su file
function saveSchedule() {
    try {
        fs.writeFileSync(SCHEDULE_FILE, JSON.stringify(groupSchedule, null, 2));
    } catch (error) {
        console.error('Errore nel salvataggio degli orari:', error);
    }
}

function parseTimeToMs(timeStr) {
    // timeStr formato "HH:MM"
    const [h, m] = timeStr.split(':').map(Number);
    const now = new Date();
    let target = new Date(now);
    target.setHours(h, m, 0, 0);
    if (target < now) target.setDate(target.getDate() + 1); // se già passato, domani
    return target - now;
}

function scheduleGroupEvents(conn, groupId, openTimeStr, closeTimeStr) {
    // Cancella eventuali timer esistenti
    if (groupSchedule[groupId]?.openTimeout) clearTimeout(groupSchedule[groupId].openTimeout);
    if (groupSchedule[groupId]?.closeTimeout) clearTimeout(groupSchedule[groupId].closeTimeout);

    // Pianifica apertura
    function planOpen() {
        if (!groupSchedule[groupId]?.active) return;
        updateGroupSetting(
            conn,
            groupId,
            'not_announcement',
            'scheduledGroupOpened'
        );
        groupSchedule[groupId].openTimeout = setTimeout(planOpen, 24 * 60 * 60 * 1000);
    }
    // Pianifica chiusura
    function planClose() {
        if (!groupSchedule[groupId]?.active) return;
        updateGroupSetting(
            conn,
            groupId,
            'announcement',
            'scheduledGroupClosed'
        );
        groupSchedule[groupId].closeTimeout = setTimeout(planClose, 24 * 60 * 60 * 1000);
    }

    // Avvia i timer
    groupSchedule[groupId].openTimeout = setTimeout(planOpen, parseTimeToMs(openTimeStr));
    groupSchedule[groupId].closeTimeout = setTimeout(planClose, parseTimeToMs(closeTimeStr));
}

async function updateGroupSetting(conn, groupId, setting, messageKey) {
    try {
        // setting: 'not_announcement' (aperta) o 'announcement' (chiusa)
        // WhatsApp richiede che il bot sia admin per cambiare le impostazioni
        await conn.groupSettingUpdate(groupId, setting);
        await conn.sendMessage(groupId, { text: global.t(messageKey, null, groupId) });
    } catch (error) {
        // Se errore di permessi, avvisa il gruppo
        if (error?.output?.statusCode === 403 || (error?.message && error.message.includes('not admin'))) {
            await conn.sendMessage(groupId, { text: global.t('groupSettingsError', null, groupId) });
        } else {
            console.error(`[${new Date().toISOString()}] Errore nell'aggiornamento del gruppo ${groupId}:`, error);
        }
    }
}

// Ripristina tutti i job all'avvio
export function initSchedule(conn) {
    for (const [groupId, settings] of Object.entries(groupSchedule)) {
        if (settings.active) {
            scheduleGroupEvents(conn, groupId, settings.openTime, settings.closeTime);
        }
    }
}

const handler = async (msg, { conn, args, isAdmin }) => {
    const groupId = msg.key.remoteJid;
    const isGroup = groupId.endsWith('@g.us');
    const userId = msg.sender || msg.participant || null;
    if (!isGroup) {
        return conn.sendMessage(groupId, { text: global.t('setorarioGroupOnly', userId, groupId) });
    }
    if (!isAdmin) {
        return conn.sendMessage(groupId, { text: global.t('adminOnly', userId, groupId) });
    }
    const command = args[0]?.toLowerCase();

    if (!command) {
        return conn.sendMessage(groupId, { text: global.t('setorarioHelp', userId, groupId) });
    }

    switch (command) {
        case 'set':
            if (args.length < 3) {
                return conn.sendMessage(groupId, { text: global.t('setorarioUseCorrect', userId, groupId) });
            }
            const [openTime, closeTime] = args.slice(1);
            if (!/^\d{2}:\d{2}$/.test(openTime) || !/^\d{2}:\d{2}$/.test(closeTime)) {
                return conn.sendMessage(groupId, { text: global.t('setorarioInvalidFormat', userId, groupId) });
            }
            groupSchedule[groupId] = { openTime, closeTime, active: true };
            scheduleGroupEvents(conn, groupId, openTime, closeTime);
            saveSchedule();
            return conn.sendMessage(groupId, { text: global.t('setorarioSetSuccess', userId, groupId, { open: openTime, close: closeTime }) });

        case 'disattiva':
            if (!groupSchedule[groupId]) {
                return conn.sendMessage(groupId, { text: global.t('setorarioNoConfig', userId, groupId) });
            }
            groupSchedule[groupId].active = false;
            if (groupSchedule[groupId].openTimeout) clearTimeout(groupSchedule[groupId].openTimeout);
            if (groupSchedule[groupId].closeTimeout) clearTimeout(groupSchedule[groupId].closeTimeout);
            saveSchedule();
            return conn.sendMessage(groupId, { text: global.t('setorarioDisabled', userId, groupId) });

        case 'status':
            const scheduleInfo = groupSchedule[groupId];
            if (!scheduleInfo) {
                return conn.sendMessage(groupId, { text: global.t('setorarioNoConfig', userId, groupId) });
            }
            return conn.sendMessage(groupId, { text: global.t('setorarioConfiguredStatus', userId, groupId, { open: scheduleInfo.openTime, close: scheduleInfo.closeTime, status: scheduleInfo.active ? '✅ Attivo' : '❌ Disattivato' }) });

        default:
            return conn.sendMessage(groupId, { text: global.t('setorarioUnknownCommand', userId, groupId) });
    }
};

handler.command = ['setorario', '#setorario'];
handler.tags = ['group'];
handler.help = [
    'setorario set <orario_apertura> <orario_chiusura> - Imposta orari apertura/chiusura automatica',
    'setorario disable - Disattiva gli orari automatici',
    'setorario status - Mostra gli orari attuali'
];
handler.group = true;
handler.admin = true;

export default handler;