import '../lib/language.js';
let handler = async (m, { conn, usedPrefix, text }) => {
  const userId = m.sender;
  const groupId = m.isGroup ? m.chat : null;
  
  if(isNaN(text) && !text.match(/@/g)){
    
  } else if(isNaN(text)) {
    var number = text.split`@`[1]
  } else if(!isNaN(text)) {
    var number = text
  }
  
  if(!text && !m.quoted) return conn.reply(m.chat, global.t('promoteNoTarget', userId, groupId), m)
  if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, global.t('promoteInvalidNumber', userId, groupId), m)
  
  try {
    if(text) {
      var user = number + '@s.whatsapp.net'
    } else if(m.quoted.sender) {
      var user = m.quoted.sender
    } else if(m.mentionedJid) {
      var user = number + '@s.whatsapp.net'
    }
    
    // Check if user is already admin
    const groupMetadata = await conn.groupMetadata(m.chat);
    const participant = groupMetadata.participants.find(p => p.id === user);
    
    if (participant?.admin) {
      return conn.reply(m.chat, global.t('promoteAlreadyAdmin', userId, groupId, { user: user.split('@')[0] }), m);
    }
    
    await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
    await conn.reply(m.chat, global.t('promoteSuccess', userId, groupId, { user: user.split('@')[0] }), m);
  } catch (e) {
    console.error('Errore nel promuovere utente:', e);
    await conn.reply(m.chat, global.t('promoteError', userId, groupId), m);
  }
}
handler.command = /^(promuovi|mettiadmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
