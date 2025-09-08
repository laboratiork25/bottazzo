import '../lib/language.js';

let handler = async (m, { conn, command, text }) => {
    // Genera un livello casuale di alcol nel sangue
    let width = Math.floor(Math.random() * 101);

    // Determina il messaggio in base al livello
    let finalPhrase =
        width >= 70
            ? global.t('alcolPhraseHigh', m.sender, m.chat)
            : width >= 30
            ? global.t('alcolPhraseMedium', m.sender, m.chat)
            : global.t('alcolPhraseLow', m.sender, m.chat);

    // Creazione del messaggio
    let message = `
${global.t('alcolTestHeader', m.sender, m.chat)}

${global.t('alcolTestTitle', m.sender, m.chat)}
━━━━━━━━━━━━━━
 ${text ? text : global.t('alcolTestDefaultUser', m.sender, m.chat)} ${global.t('alcolTestLevel', m.sender, m.chat, { width })} 
${global.t('alcolTestFooter', m.sender, m.chat)}

${finalPhrase}
`.trim();

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: `ChatUnity`
            },
        }
    };

    m.reply(message, null, { mentions: conn.parseMention(message), ...messageOptions });
};

handler.command = /^(alcolizzato|alcol)$/i;

export default handler;