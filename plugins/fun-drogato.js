import '../lib/language.js';
let handler = async (m, { conn, command, text }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let width = Math.floor(Math.random() * 101);
    let finalPhrase = width >= 70 
        ? global.t('drugTestHigh', userId, groupId)
        : width >= 30 
        ? global.t('drugTestMedium', userId, groupId)
        : global.t('drugTestLow', userId, groupId);

    let message = `
『💬』 ══ •⊰✰⊱• ══ 『💬』

${global.t('drugTestTitle', userId, groupId)} 
━━━━━━━━━━━━━━
 ${text ? text : 'Tu'} ${global.t('drugTestResult', userId, groupId, { target: text ? text : 'Tu', percent: width })}
『💬』 ══ •⊰✰⊱• ══ 『💬』

${finalPhrase}
`.trim();

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: global.t('botName', userId, groupId)
            },
        }
    };

    m.reply(message, null, { mentions: conn.parseMention(message), ...messageOptions });
};

handler.command = /^(drogato|drugtest)$/i;
export default handler;