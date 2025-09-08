import '../lib/language.js';
let handler = async (m, { conn, text, usedPrefix, command }) => {
    // Verifica del messaggio di report
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    if (!text) return conn.reply(m.chat, global.t('proposeProvideCommand', userId, groupId), m)
    if (text.length < 10) return conn.reply(m.chat, global.t('proposeDescribeBetter', userId, groupId), m)
    if (text.length > 1000) return conn.reply(m.chat, global.t('proposeMaxLength', userId, groupId), m)
    
    // Formattazione del report
    const reportText = `* \`P R O P O S T A\` *

📱 Numero:
• Wa.me/${m.sender.split`@`[0]}

👤 Utente: 
• ${m.pushName || 'Anonimo'}

📝 Messaggio:
• ${text}`

    try {
        // Invia al proprietario
        await conn.reply(global.owner[0][0] + '@s.whatsapp.net', 
            m.quoted ? reportText + '\n\n📎 Citazione:\n' + m.quoted.text : reportText, 
            m, 
            { mentions: conn.parseMention(reportText) }
        )

        // Invia al canale
        await conn.sendMessage(global.channelid, { 
            text: m.quoted ? reportText + '\n\n📎 Citazione:\n' + m.quoted.text : reportText, 
            contextInfo: {
                externalAdReply: {
                    title: "⚠️ proposta comando ⚠️",
                    body: 'Nuova proposta ricevuta',
                    thumbnailUrl: fotoperfil,
                    sourceUrl: redes,
                    mediaType: 1,
                    showAdAttribution: false,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: null })

        // Conferma all'utente
        await m.reply(global.t('proposeConfirmSent', userId, groupId))
        
    } catch (error) {
        console.error('Errore nella proposta:', error)
        await m.reply(global.t('proposeConfirmSent', userId, groupId))
    }
}

handler.help = ['consiglia']
handler.tags = ['gp']
handler.command = ['consiglia',]

export default handler