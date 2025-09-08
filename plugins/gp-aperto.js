import '../lib/language.js';
let handler = async (m, { conn, args, usedPrefix, command }) => {
    // Prende il nome del bot
    let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`

    // Solo se il comando è "aperto" (ignora argomenti)
    if (command === 'aperto') {
        // Prova a cambiare le impostazioni del gruppo
        try {
            await conn.groupSettingUpdate(m.chat, 'not_announcement');
            const userId = m.sender;
            const groupId = m.isGroup ? m.chat : null;
            await conn.sendMessage(m.chat, {
                text: global.t('groupOpenSuccess', userId, groupId),
                contextInfo: {
                    forwardingScore: 99,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363259442839354@newsletter',
                        serverMessageId: '',
                        newsletterName: `${nomeDelBot}`
                    }
                }
            }, { quoted: m });
        } catch (e) {
            const userId = m.sender;
            const groupId = m.isGroup ? m.chat : null;
            await m.reply(global.t('groupSettingsError', userId, groupId));
        }
    }
}
handler.help = ['aperto'];
handler.tags = ['group'];
handler.command = /^aperto$/i;
handler.admin = true;
handler.botAdmin = true;

export default handler