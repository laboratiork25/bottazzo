/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                         CHATUNITY BOT - MENU ADMIN                          ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Menu Button System & Multilingual Support                       ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  Questo modulo gestisce il menu amministratori con supporto                ║
 * ║  multilingue e sistema di bottoni interattivi aggiornato.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
    const userId = message.sender;
    const groupId = message.isGroup ? message.chat : null;
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    if (command === 'menu') {
        return await (await import('./menu-principale.js')).default(message, { conn, usedPrefix });
    }
    if (command === 'menuowner') {
        return await (await import('./menu-owner.js')).default(message, { conn, usedPrefix });
    }
    if (command === 'menusicurezza') {
        return await (await import('./menu-sicurezza.js')).default(message, { conn, usedPrefix });
    }
    if (command === 'menugruppo') {
        return await (await import('./menu-gruppo.js')).default(message, { conn, usedPrefix });
    }

    const menuText = generateMenuText(usedPrefix, botName, userCount, userId, groupId);

    const imagePath = path.join(__dirname, '../menu/onepiece.jpeg'); 
    await conn.sendMessage(
        message.chat,
        {
            image: { url: imagePath },
            caption: menuText,
            footer: global.t('chooseMenu', userId, groupId) || 'Scegli un menu:',
            templateButtons: [
                { index: 1, quickReplyButton: { displayText: global.t('mainMenuButton', userId, groupId) || "🏠 Menu Principale", id: `${usedPrefix}menu` } },
                { index: 2, quickReplyButton: { displayText: global.t('ownerMenuButton', userId, groupId) || "👑 Menu Owner", id: `${usedPrefix}menuowner` } },
                { index: 3, quickReplyButton: { displayText: global.t('securityMenuButton', userId, groupId) || "🚨 Menu Sicurezza", id: `${usedPrefix}menusicurezza` } },
                { index: 4, quickReplyButton: { displayText: global.t('groupMenuButton', userId, groupId) || "👥 Menu Gruppo", id: `${usedPrefix}menugruppo` } },
                { index: 5, quickReplyButton: { displayText: global.t('aiMenuButton', userId, groupId) || "🤖 Menu IA", id: `${usedPrefix}menuia` } }
            ],
            viewOnce: true,
            headerType: 4
        }
    );
};

handler.help = ['menuadmin', 'menu', 'menuowner', 'menusicurezza', 'menugruppo'];
handler.tags = ['menuadmin'];
handler.command = /^(menuadmin|menu|menuowner|menusicurezza|menugruppo)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount, userId, groupId) {
    return `
╭━〔*💬 ${global.t('adminMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵'} 💬*〕━┈⊷  
┃◈╭─────────────·๏  
┃◈┃• *${global.t('adminCommands', userId, groupId) || '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵'} 👑*  
┃◈┃  
┃◈┃• 👑 *${global.t('promoteCommand', userId, groupId) || 'promuovi /mettiadmin'}*  
┃◈┃• 👑 *${global.t('demoteCommand', userId, groupId) || 'retrocedi /togliadmin'}*  
┃◈┃• 👑 *${global.t('warnCommands', userId, groupId) || 'warn / unwarn'}*  
┃◈┃• 👑 *${global.t('muteCommands', userId, groupId) || 'muta / smuta'}*  
┃◈┃• 👑 *${global.t('setDescCommand', userId, groupId) || 'setdescrizione'}* 
┃◈┃• 👑 *${global.t('setScheduleCommand', userId, groupId) || 'setorario'}* 
┃◈┃• 👑 *${global.t('setNameCommand', userId, groupId) || 'setnome'}*  
┃◈┃• 👑 *${global.t('hidetagCommand', userId, groupId) || 'hidetag'}*  
┃◈┃• 👑 *${global.t('kickCommand', userId, groupId) || 'kick / cacca'}*  
┃◈┃• 👑 *${global.t('adminsCommand', userId, groupId) || 'admins'}*  
┃◈┃• 👑 *${global.t('tagallCommand', userId, groupId) || 'tagall'}*  
┃◈┃• 👑 *${global.t('openCloseCommand', userId, groupId) || 'aperto / chiuso'}*  
┃◈┃• 👑 *${global.t('setWelcomeCommand', userId, groupId) || 'setwelcome'}*  
┃◈┃• 👑 *${global.t('setByeCommand', userId, groupId) || 'setbye'}*  
┃◈┃• 👑 *${global.t('inactiveCommand', userId, groupId) || 'inattivi'}*  
┃◈┃• 👑 *${global.t('listNumCommand', userId, groupId) || 'listanum + prefisso'}*  
┃◈┃• 👑 *${global.t('cleanupCommand', userId, groupId) || 'pulizia + prefisso'}*  
┃◈┃• 👑 *${global.t('clearPlayCommand', userId, groupId) || 'clearplay'}*  
┃◈┃• 👑 *${global.t('rulesCommand', userId, groupId) || 'regole/setregole'}*  
┃◈┃• 👑 *${global.t('quarantineCommand', userId, groupId) || 'quarantena'}*  
┃◈┃• 👑 *${global.t('dsCommand', userId, groupId) || 'ds'}*  
┃◈┃• 👑 *${global.t('listWarnCommand', userId, groupId) || 'listawarn'}*  
┃◈┃• 👑 *${global.t('linkCommand', userId, groupId) || 'link'}*  
┃◈┃• 👑 *${global.t('linkQrCommand', userId, groupId) || 'linkqr'}*  
┃◈┃  
┃◈└───────────┈⊷  
╰━━━━━━━━━━━━━┈·๏  
*•────────────•⟢*  
> © ${global.t('poweredBy', userId, groupId) || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ'} 𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲  
*•────────────•⟢*  
`.trim();
}
