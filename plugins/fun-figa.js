import '../lib/language.js';
let handler = async (m, { conn, command, text }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let width = Math.floor(Math.random() * 31);
    let finalPhrase = width >= 8 
        ? global.t('figaHigh', userId, groupId)
        : global.t('figaLow', userId, groupId);

    let message = `
━━━━━━━━━━━━━━━━
${global.t('figaCalculatorTitle', userId, groupId)}
━━━━━━━━━━━━━━━━
${global.t('figaResult', userId, groupId, { target: text ? text : 'Tu', width: width })}
━━━━━━━━━━━━━━━━
${finalPhrase}
`.trim();

    const messageOptions = {
        contextInfo: {
            forwardingScore: 0,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `${conn.user.name}`
            }
        }
    };

    await conn.sendMessage(m.chat, { text: message, ...messageOptions });
};

handler.command = /^(figa|vagina|pussy)$/i;
export default handler;