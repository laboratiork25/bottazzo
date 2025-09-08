import '../lib/language.js';
let handler = async (m, { conn, usedPrefix }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let grandezze = [
        global.t('analSize1', userId, groupId),
        global.t('analSize2', userId, groupId),
        global.t('analSize3', userId, groupId),
        global.t('analSize4', userId, groupId),
        global.t('analSize5', userId, groupId),
        global.t('analSize6', userId, groupId)
    ];

    let grandezzaCasuale = grandezze[Math.floor(Math.random() * grandezze.length)];
    let messaggio = global.t('analAnalyzing', userId, groupId) + "\n\n" + global.t('analResult', userId, groupId) + " " + grandezzaCasuale;

    let opzioniInoltro = inoltra(global.t('botName', userId, groupId));
    await conn.sendMessage(m.chat, { text: messaggio, ...opzioniInoltro }, { quoted: m });
};

const inoltra = (nomeDelBot) => {
    let messageOptions = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `${nomeDelBot}`
            }
        }
    };
    return messageOptions;
};

handler.command = ["ano", "culometro"];
export default handler;