import '../lib/language.js';
let handler = async (m, { conn, text, participants, command, usedPrefix }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    // Se non è stato menzionato nessuno, verifica se il messaggio è una risposta
    if (!text) {
        if (m.quoted && m.quoted.sender) {
            text = '@' + m.quoted.sender.split('@')[0];
        } else {
            return conn.reply(m.chat, global.t('kissNoMention', userId, groupId) || ` Devi menzionare qualcuno o rispondere a un messaggio per baciarlo💋! Esempio: ${usedPrefix + command} @utente`, m);
        }
    }

    // Prende gli utenti menzionati nel messaggio
    let utentiMenzionati = m.mentionedJid;

    // Se non ci sono menzionati e non è una risposta, usa il sender del messaggio citato
    if (!utentiMenzionati.length && m.quoted && m.quoted.sender) {
        utentiMenzionati = [m.quoted.sender];
    }

    // Se ancora non c'è nessuno da baciare
    if (!utentiMenzionati.length) {
        return m.reply(global.t('kissMentionRequired', userId, groupId) || "💋 *Devi menzionare qualcuno per baciarlo!*\nEsempio: *.bacia @utente*");
    }

    let utenteBaciato = utentiMenzionati[0];

    // Messaggio del bacio
    let messaggio = global.t('kissMessage', userId, groupId, {
        user1: await conn.getName(m.sender),
        user2: await conn.getName(utenteBaciato)
    }) || `💋 *${await conn.getName(m.sender)} ha dato un bacio a ${await conn.getName(utenteBaciato)}!* 😘`;

    await conn.sendMessage(m.chat, { text: messaggio, mentions: [utenteBaciato] }, { quoted: m });
};

handler.command = ["bacia"];
export default handler;