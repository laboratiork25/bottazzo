import '../lib/language.js';
let handler = async (m, { conn, command, text, usedPrefix }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let target = text ? text.replace(/[@]/g, '') + '@s.whatsapp.net' : (m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0]);
    if (!target) return conn.reply(m.chat, global.t('downNoTarget', userId, groupId, { usedPrefix, command }), m);

    let name = await conn.getName(target);
    let randomPercent = Math.floor(Math.random() * 100) + 1;

    // Frasi satiriche e spietate
    let frasiTaglienti = [
        global.t('downPhrase1', userId, groupId),
        global.t('downPhrase2', userId, groupId),
        global.t('downPhrase3', userId, groupId),
        global.t('downPhrase4', userId, groupId),
        global.t('downPhrase5', userId, groupId),
        global.t('downPhrase6', userId, groupId),
        global.t('downPhrase7', userId, groupId),
        global.t('downPhrase8', userId, groupId)
    ];

    let fraseRandom = frasiTaglienti[Math.floor(Math.random() * frasiTaglienti.length)];

    // Messaggio finale SPARA A ZERO
    let messaggioFinale = global.t('downResult', userId, groupId, {
        command: command.toUpperCase(),
        name: name,
        percent: randomPercent,
        dangerLevel: randomPercent > 80 ? global.t('downDangerHigh', userId, groupId) : global.t('downDangerLow', userId, groupId),
        phrase: fraseRandom,
        warning: randomPercent > 90 ? global.t('downWarningHigh', userId, groupId) : 
                randomPercent < 20 ? global.t('downWarningLow', userId, groupId) : 
                global.t('downWarningMedium', userId, groupId),
        conclusion: randomPercent > 70 ? global.t('downConclusionHigh', userId, groupId) : global.t('downConclusionLow', userId, groupId)
    });

    await conn.sendMessage(m.chat, { 
        text: messaggioFinale,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                newsletterName: global.t('downNewsletterName', userId, groupId)
            }
        },
        mentions: [target]
    }, { quoted: m });
};

handler.help = ['down', 'ritardato', 'mongoloide', 'disabile', 'ritardata', 'stupid', 'retarded', 'mongoloid', 'disabled'].map(v => v + ' @tag | nome');
handler.tags = ['satira', 'game'];
handler.command = /^(down|ritardato|mongoloide|disabile|ritardata|stupid|retarded|mongoloid|disabled)$/i;

export default handler;