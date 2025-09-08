/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                       CHATUNITY BOT - MENU SICUREZZA                        ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Menu Button System & Multilingual Support                       ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  Questo modulo gestisce il menu sicurezza con supporto                     ║
 * ║  multilingue e sistema di bottoni interattivi aggiornato.                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import os from 'os';
import util from 'util';
import humanReadable from 'human-readable';
import baileys from '@whiskeysockets/baileys';
import fs from 'fs';
import perf_hooks from 'perf_hooks';
import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let handler = async (m, { conn, usedPrefix, command }) => {
  const userId = m.sender;
  const groupId = m.isGroup ? m.chat : null;
  const chat = global.db.data.chats[m.chat];
  const isOwner = global.owner.map(([number]) => number + '@s.whatsapp.net').includes(m.sender);

  if (command === 'menu') {
    return await (await import('./menu-principale.js')).default(m, { conn, usedPrefix });
  }
  if (command === 'menuadmin') {
    return await (await import('./menu-admin.js')).default(m, { conn, usedPrefix });
  }
  if (command === 'menuowner') {
    return await (await import('./menu-owner.js')).default(m, { conn, usedPrefix });
  }
  if (command === 'menugruppo') {
    return await (await import('./menu-gruppo.js')).default(m, { conn, usedPrefix });
  }

  // Funzioni sincronizzate con l'handler
  const functions = {
    "Antilink": chat.antiLink,
    "Antilinkhard": chat.antiLinkHard,
    "Antispam": chat.antiSpam,
    "Antitrava": chat.antitrava,
    "Benvenuto": chat.welcome,
    "Detect": chat.detect,
    "Antibestemmie": chat.antibestemmie,
    "GPT": chat.gpt,
    "JadiBot": chat.jadibot,
    "SoloGruppo": chat.sologruppo,
    "SoloPrivato": chat.soloprivato,
    "soloadmin": chat.soloadmin,
    "BanGruppo": chat.isBanned,
    "Antiporno": chat.antiporno,
    "AntiCall": chat.antiCall,
    "Antiinsta": chat.antiinsta,
    "AntiTikTok": chat.antitiktok,
    "Antipaki": chat.antipaki,
    "Antivirus": chat.antivirus,
    "Antibot": chat.antibot,
    "Antivoip": chat.antivoip || false,
    "Antimedia": chat.antimedia,
    "Antisondaggi": chat.antisondaggi,
  };

  let statusList = Object.entries(functions)
    .map(([name, state]) => `${state ? '🟢' : '🔴'} - *${name}*`)
    .join('\n');

  let menuText = `
╭〔*💬 ${global.t('securityMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐈'} 💬*〕┈⊷
┃◈╭─────────────·๏
┃◈┃• *${global.t('activateDisable', userId, groupId) || '𝐀𝐓𝐓𝐈𝐕𝐀/𝐃𝐈𝐒𝐀𝐁𝐈𝐋𝐈𝐓𝐀'}*
┃◈┃
┃◈┃• *ℹ ${global.t('howToUse', userId, groupId) || '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀'}*
┃◈┃• *🟢 ${global.t('activateFunction', userId, groupId) || 'attiva [funzione]'}* 
┃◈┃• *🔴 ${global.t('disableFunction', userId, groupId) || 'disabilita [funzione]'}*
┃◈╰━━━━━━━━━━━━━┈·๏
┃◈┃
${statusList.split('\n').map(line => `┃◈┃• ${line}`).join('\n')}
┃◈┃
┃◈└───────────┈⊷
┃◈┃• *${global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬'}:* ${vs}
┃◈┃•  ${global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁: 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄'}
┃◈┃• *${global.t('supportLabel', userId, groupId) || '𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎'}:* (.supporto)
╰━━━━━━━━━━━━━┈·๏
`.trim();

  // Percorso dell'immagine
  const imagePath = path.join(__dirname, '../menu/onepiece4.jpeg');

  // Invia il menu con l'immagine e i bottoni
  await conn.sendMessage(m.chat, {
    image: { url: imagePath },
    caption: menuText,
    footer: global.t('chooseMenu', userId, groupId) || 'Scegli un menu:',
    templateButtons: [
      { index: 1, quickReplyButton: { displayText: global.t('mainMenuButton', userId, groupId) || "🏠 Menu Principale", id: `${usedPrefix}menu` } },
      { index: 2, quickReplyButton: { displayText: global.t('menuAdmin', userId, groupId) || "🛡️ Menu Admin", id: `${usedPrefix}menuadmin` } },
      { index: 3, quickReplyButton: { displayText: global.t('menuOwner', userId, groupId) || "👑 Menu Owner", id: `${usedPrefix}menuowner` } },
      { index: 4, quickReplyButton: { displayText: global.t('menuGroup', userId, groupId) || "👥 Menu Gruppo", id: `${usedPrefix}menugruppo` } },
      { index: 5, quickReplyButton: { displayText: global.t('menuAI', userId, groupId) || "🤖 Menu IA", id: `${usedPrefix}menuia` } }
    ],
    viewOnce: true,
    headerType: 4
  });
};

handler.help = ["menusicurezza", "menu", "menuadmin", "menuowner", "menugruppo"];
handler.tags = ["menu"];
handler.command = /^(menusicurezza|menu|menuadmin|menuowner|menugruppo)$/i;

export default handler;
