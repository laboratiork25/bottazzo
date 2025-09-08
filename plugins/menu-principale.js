/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                        CHATUNITY BOT - MENU PRINCIPALE                      ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Menu Button System & Multilingual Support                       ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  Questo modulo gestisce il menu principale del bot con supporto            ║
 * ║  multilingue e sistema di bottoni interattivi aggiornato.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
    const userId = message.sender
    const groupId = message.isGroup ? message.chat : null
    
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount, userId, groupId);

    const imagePath = path.join(__dirname, '../menu/Menu2.jpg'); 
    
    const footerText = global.t('chooseMenu', userId, groupId) || 'Scegli un menu:';
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ Menu Admin'
    const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 Menu Owner'
    const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 Menu Sicurezza'
    const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 Menu Gruppo'
    const aiMenuText = global.t('menuAI', userId, groupId) || '🤖 Menu IA'
    
    await conn.sendMessage(
        message.chat,
        {
            image: { url: imagePath },
            caption: menuText,
            footer: footerText,
            templateButtons: [
                { index: 1, quickReplyButton: { displayText: adminMenuText, id: `${usedPrefix}menuadmin` } },
                { index: 2, quickReplyButton: { displayText: ownerMenuText, id: `${usedPrefix}menuowner` } },
                { index: 3, quickReplyButton: { displayText: securityMenuText, id: `${usedPrefix}menusicurezza` } },
                { index: 4, quickReplyButton: { displayText: groupMenuText, id: `${usedPrefix}menugruppo` } },
                { index: 5, quickReplyButton: { displayText: aiMenuText, id: `${usedPrefix}menuia` } }
            ],
            viewOnce: true,
            headerType: 4
        }
    );
};

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount, userId, groupId) {
    const menuTitle = global.t('mainMenuTitle', userId, groupId) || '💬 𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻 💬'
    const staffText = global.t('staffCommand', userId, groupId) || 'staff'
    const hegemoniaText = global.t('hegemoniaCommand', userId, groupId) || 'egemonia'
    const candidatesText = global.t('candidatesCommand', userId, groupId) || 'candidati'
    const installText = global.t('installCommand', userId, groupId) || 'installa'
    const guideText = global.t('guideCommand', userId, groupId) || 'guida'
    const channelsText = global.t('channelsCommand', userId, groupId) || 'canali'
    const systemText = global.t('systemCommand', userId, groupId) || 'sistema'
    const faqText = global.t('faqCommand', userId, groupId) || 'FAQ'
    const pingText = global.t('pingCommand', userId, groupId) || 'ping'
    const reportText = global.t('reportCommand', userId, groupId) || 'segnala'
    const suggestText = global.t('suggestCommand', userId, groupId) || 'consiglia'
    const newsText = global.t('newsCommand', userId, groupId) || 'novità'
    const versionText = global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬'
    const collabText = global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁: 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄'
    const usersText = global.t('usersLabel', userId, groupId) || '𝐔𝐓𝐄𝐍𝐓𝐈'
    
    return `

╭〔 *${menuTitle}* 〕┈⊷
┃◈╭───────────·๏
┃◈┃• 👑 *${prefix}${staffText}*
┃◈┃• 👑 *${prefix}${hegemoniaText}*
┃◈┃• 📜 *${prefix}${candidatesText}*
┃◈┃• 📥 *${prefix}${installText}*
┃◈┃• 📖 *${prefix}${guideText}*
┃◈┃• 📝 *${prefix}${channelsText}* 
┃◈┃• ⚙ *${prefix}${systemText}*
┃◈┃• ❓ *${prefix}${faqText}* 
┃◈┃• 🚀 *${prefix}${pingText}*
┃◈┃• 📝 *${prefix}${reportText}* (comando)
┃◈┃• 💡 *${prefix}${suggestText}* (comando)
┃◈┃• 🆕 *${prefix}${newsText}* (aggiornamenti)
┃◈┃
┃◈└───────────┈⊷
┃◈┃• *${versionText}:* 2.0.0
┃◈┃• ${collabText}
┃◈┃• ${usersText}: ${userCount}
╰━━━━━━━━━━━━━┈·๏
`.trim();
}