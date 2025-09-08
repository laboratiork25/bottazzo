import '../lib/language.js';
let handler = async (m, { conn }) => {
    try {
        // Messaggio principale senza pulsanti
        const userId = m.sender;
        const groupId = m.isGroup ? m.chat : null;
        await conn.sendMessage(m.chat, {
            text: global.t('minecraftMainText', userId, groupId),
            footer: global.t('minecraftFooter', userId, groupId),
            mentions: [m.sender]
        }, { quoted: m });

        // Invia un messaggio con immagine dopo 1 secondo
        setTimeout(async () => {
            await conn.sendMessage(m.chat, {
                image: { 
                    url: 'https://i.imgur.com/JlxJmZQ.png'
                },
                caption: global.t('minecraftCaption', userId, groupId),
                mentions: [m.sender]
            }, { quoted: m });
        }, 1000);

    } catch (error) {
        console.error('Errore:', error);
        const userId = m.sender;
        const groupId = m.isGroup ? m.chat : null;
        await conn.sendMessage(m.chat, { 
            text: global.t('minecraftError', userId, groupId)
        }, { quoted: m });
    }
}

handler.help = ['minecraft'];
handler.tags = ['games'];
handler.command = ['minecraft', 'mc', 'eglercraft'];
handler.premium = false;

export default handler;