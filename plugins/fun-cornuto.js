import '../lib/language.js';
let handler = async (m, { conn, command, text }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    const cornutoSpeciale = '639318481412@s.whatsapp.net';

    let targetText = text;
    if (!targetText && m.quoted) {
        targetText = m.quoted.sender ? '@' + m.quoted.sender.split('@')[0] : m.quoted.text || '';
    }
    if (!targetText) return conn.reply(m.chat, global.t('cornutoNoTarget', userId, groupId), m);

    if (m.sender === cornutoSpeciale) {
        let trollText = global.t('cornutoSpecialTroll', userId, groupId);
        await conn.sendMessage(m.chat, {
            text: trollText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363259442839354@newsletter',
                    newsletterName: global.t('cornutoClubName', userId, groupId)
                }
            },
            mentions: conn.parseMention(trollText)
        }, { quoted: m });
        return;
    }

    let percent = Math.floor(Math.random() * 101);
    let message = "";

    if (percent < 30) {
        message = global.t('cornutoLevel1', userId, groupId);
    } else if (percent < 70) {
        message = global.t('cornutoLevel2', userId, groupId);
    } else if (percent < 90) {
        message = global.t('cornutoLevel3', userId, groupId);
    } else {
        message = global.t('cornutoLevel4', userId, groupId);
    }

    let response = global.t('cornutoResult', userId, groupId, {
        target: targetText,
        percent: percent,
        message: message,
        advice: percent > 75 ? global.t('cornutoAdviceHigh', userId, groupId) : global.t('cornutoAdviceLow', userId, groupId)
    });

    await conn.sendMessage(m.chat, {
        text: response,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                newsletterName: global.t('cornutoClubName', userId, groupId)
            }
        },
        mentions: conn.parseMention(response)
    }, { quoted: m });
};

handler.help = ['cornuto @nome'];
handler.tags = ['fun'];
handler.command = /^(cornuto|cornuta|corna)$/i;
handler.fail = global.t('cornutoUsage', null, null);

export default handler;