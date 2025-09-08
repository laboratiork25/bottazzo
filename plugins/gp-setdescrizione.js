import '../lib/language.js';
const handler = async (m, { conn, args }) => {
    try {
      
      const pp = await conn.profilePictureUrl(m.chat, 'image').catch(() => './menu/chatunitybot.mp4');
      
      // Unisci gli argomenti per creare la descrizione
      const description = args.join(' ').trim();
      
      const userId = m.sender;
      const groupId = m.isGroup ? m.chat : null;
      if (!description) {
        return conn.reply(m.chat, global.t('setDescInvalid', userId, groupId), m);
      }
  
      // Aggiorna la descrizione del gruppo
      await conn.groupUpdateDescription(m.chat, description);
      
      // Invia conferma
      await conn.reply(m.chat, global.t('setDescSuccess', userId, groupId), m);
      
    } catch (error) {
      console.error('Errore nel cambiare la descrizione:', error);
      const userId = m.sender;
      const groupId = m.isGroup ? m.chat : null;
      conn.reply(m.chat, global.t('setDescError', userId, groupId), m);
    }
  }
  
  handler.help = ['setdesc <testo>'];
  handler.tags = ['group'];
  handler.command = /^setdesk|setdesc(rizione)?|descrip(ción|cion)$/i;
  handler.group = true;
  handler.admin = true;
  handler.botAdmin = true;
  
  export default handler;