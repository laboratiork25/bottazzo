/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                          CHATUNITY BOT - MENU IA                           ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Menu Button System & Multilingual Support                       ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  Questo modulo gestisce il menu IA con supporto                            ║
 * ║  multilingue e sistema di bottoni interattivi aggiornato.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const handler = async (message, { conn, usedPrefix }) => {
    const userId = message.sender;
    const groupId = message.isGroup ? message.chat : null;
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount, userId, groupId);

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `${botName}`
            },
        }
    };

    // Invia la foto con il menu e i bottoni
    const imagePath = './menu/onepiece2.jpeg';
    await conn.sendMessage(message.chat, {
        image: { url: imagePath },
        caption: menuText,
        footer: global.t('chooseMenu', userId, groupId) || 'Scegli un menu:',
        templateButtons: [
            { index: 1, quickReplyButton: { displayText: global.t('mainMenuButton', userId, groupId) || "🏠 Menu Principale", id: `${usedPrefix}menu` } },
            { index: 2, quickReplyButton: { displayText: global.t('menuAdmin', userId, groupId) || "🛡️ Menu Admin", id: `${usedPrefix}menuadmin` } },
            { index: 3, quickReplyButton: { displayText: global.t('menuOwner', userId, groupId) || "👑 Menu Owner", id: `${usedPrefix}menuowner` } },
            { index: 4, quickReplyButton: { displayText: global.t('menuGroup', userId, groupId) || "👥 Menu Gruppo", id: `${usedPrefix}menugruppo` } },
            { index: 5, quickReplyButton: { displayText: global.t('menuSecurity', userId, groupId) || "🚨 Menu Sicurezza", id: `${usedPrefix}menusicurezza` } }
        ],
        viewOnce: true,
        headerType: 4,
        ...messageOptions
    }, { quoted: message });
};

async function fetchThumbnail(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    } catch (error) {
        console.error('Errore durante il fetch della thumbnail:', error);
        return 'default-thumbnail'; // Fallback thumbnail in caso di errore
    }
}

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuia|menuai)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount, userId, groupId) {
    return `

╭〔 *💬 ${global.t('aiMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻'} 💬* 〕┈⊷
┃◈╭───────────·๏
┃◈┃• *${global.t('generalCommands', userId, groupId) || '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑮𝑬𝑵𝑬𝑹𝑨𝑳𝑰'}*
┃◈┃
┃◈┃• 🤖 *.${global.t('iaCommand', userId, groupId) || 'ia'}* (AI)  
┃◈┃• 🤖 *.${global.t('alyaCommand', userId, groupId) || 'Alya'}* (AI)  
┃◈┃• 🤖 *.${global.t('geminiCommand', userId, groupId) || 'gemini'}* (AI)  
┃◈┃• 🤖 *.${global.t('chatgptCommand', userId, groupId) || 'chatgpt'}* (AI)  
┃◈┃• 🤖 *.${global.t('deepseekCommand', userId, groupId) || 'deepseek'}* (AI)  
┃◈┃• 🤖 *.${global.t('voiceCommand', userId, groupId) || 'vocale'}* (AI)  
┃◈┃• 🤖 *.${global.t('imageCommand', userId, groupId) || 'immagine'}* (AI)  
┃◈┃• 🤖 *.${global.t('image2Command', userId, groupId) || 'immagine2'}* (AI) 
┃◈┃• 🤖 *.${global.t('image3Command', userId, groupId) || 'immagine3'}* (AI) 
┃◈┃• 🤖 *.${global.t('animalInfoCommand', userId, groupId) || 'infoanimale'}*  
┃◈┃• 🤖 *.${global.t('kcalCommand', userId, groupId) || 'kcal'}*  
┃◈┃• 🤖 *.${global.t('summaryCommand', userId, groupId) || 'riassunto'}*   
┃◈┃• 🤖 *.${global.t('recipeCommand', userId, groupId) || 'ricetta'}*  
┃◈┃
┃◈└───────────┈⊷
┃◈┃• *${global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬'}:* ${vs}
┃◈┃•  ${global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁: 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄'}
┃◈┃• *${global.t('supportLabel', userId, groupId) || '𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎'}:* (.supporto)
╰━━━━━━━━━━━━━┈·๏
`.trim();
}
