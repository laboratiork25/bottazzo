import '../lib/language.js';

let handler = async (m, { conn, args, text }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './menu/chatunitybot.mp4'
    
    if (!text) return conn.reply(m.chat, global.t('groupNameMissing', m.sender, m.chat), fkontak, m)
    
    try {
      let text = args.join` `
      if(args && args[0]) {
        await conn.groupUpdateSubject(m.chat, text)
      }
      
      await conn.reply(m.chat, global.t('groupNameUpdated', m.sender, m.chat), fkontak, m)
      // Alternativa con pulsante:
      // await conn.sendButton(
      //   m.chat, 
      //   'Nome modificato', 
      //   lenguajeIT.smsNam1(), 
      //   pp, 
      //   [[lenguajeIT.smsConMenu(), '/menu']], 
      //   fkontak, 
      //   m
      // )
      
    } catch (e) {
      console.error('Errore nel comando setname:', e)
      throw global.t('groupNameUpdateError', m.sender, m.chat)
    }
  }
  
  handler.command = /^(setname|setnome|nuevonombre)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  export default handler