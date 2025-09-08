import { performance } from "perf_hooks";
import '../lib/language.js';

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let handler = async (m, { conn, text }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let destinatario;

    if (m.quoted && m.quoted.sender) {
        destinatario = m.quoted.sender;
    }
    else if (m.mentionedJid && m.mentionedJid.length > 0) {
        destinatario = m.mentionedJid[0];
    }
    else {
        return m.reply(global.t('fingerNoTarget', userId, groupId));
    }

    let nomeDestinatario = `@${destinatario.split('@')[0]}`;

    // Messaggi personalizzati
    let sequenza = [
        global.t('fingerSequence1', userId, groupId, { name: nomeDestinatario }),
        global.t('fingerSequence2', userId, groupId),
        global.t('fingerSequence3', userId, groupId)
    ];

    // Invia i messaggi uno alla volta
    for (let msg of sequenza) {
        await m.reply(msg, null, { mentions: [destinatario] });
    }

    // Calcolo del tempo
    let startTime = performance.now();
    let endTime = performance.now();
    let elapsedTime = (endTime - startTime).toFixed(2);

    let resultMessage = global.t('fingerResult', userId, groupId, {
        name: nomeDestinatario,
        time: elapsedTime
    });

    conn.reply(m.chat, resultMessage, m, { mentions: [destinatario] });
};

handler.command = ["ditalino", "finger"];
handler.tags = ["fun"];
export default handler;