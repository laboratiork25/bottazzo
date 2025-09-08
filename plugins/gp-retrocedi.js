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
  
  if(!text && !m.quoted) return conn.reply(m.chat, global.t('demoteNoTarget', userId, groupId), m)
  if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, global.t('demoteInvalidNumber', userId, groupId), m)
  
  try {
    if(text) {
      var user = number + '@s.whatsapp.net'
    } else if(m.quoted.sender) {
      var user = m.quoted.sender
    } else if(m.mentionedJid) {
      var user = number + '@s.whatsapp.net'
    }
    
    // Check if user is admin
    const groupMetadata = await conn.groupMetadata(m.chat);
    const participant = groupMetadata.participants.find(p => p.id === user);
    
    if (!participant?.admin) {
      return conn.reply(m.chat, global.t('demoteNotAdmin', userId, groupId, { user: user.split('@')[0] }), m);
    }
    
    await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
    await conn.reply(m.chat, global.t('demoteSuccess', userId, groupId, { user: user.split('@')[0] }), m);
  } catch (e) {
    console.error('Errore nel retrocedere utente:', e);
    await conn.reply(m.chat, global.t('demoteError', userId, groupId), m);
  }
}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v)
handler.tags = ['group']
handler.command = /^(retrocedi|togliadmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
