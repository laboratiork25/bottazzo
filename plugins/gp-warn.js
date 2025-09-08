import '../lib/language.js';
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {
  let war = 2 // <-- numero di warning prima del ban

  let who
  if (m.isGroup) {
    who = m.mentionedJid?.[0] || m.quoted?.sender
  } else {
    who = m.chat
  }

  const userId = m.sender;
  const groupId = m.isGroup ? m.chat : null;
  if (!who) return m.reply(global.t('warnNeedTarget', userId, groupId))

  // 🔒 BLOCCA AVVERTIMENTI AL BOT
  if (who === conn.user.jid) {
    return m.reply(global.t('warnCantWarnBot', userId, groupId))
  }

  if (!(who in global.db.data.users)) {
    return m.reply(global.t('warnUserNotFound', userId, groupId))
  }

  let user = global.db.data.users[who]
  let warn = user.warn || 0
  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`

  const messageOptions = {
    contextInfo: {
      mentionedJid: [who],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363259442839354@newsletter',
        serverMessageId: '',
        newsletterName: `${nomeDelBot}`
      }
    }
  }

  if (warn < war) {
    user.warn += 1
    await conn.sendMessage(m.chat, {
      text: global.t('warnProgress', userId, groupId, { count: user.warn }),
      ...messageOptions
    })
  } else if (warn >= war) {
    user.warn = 0
    await conn.sendMessage(m.chat, {
      text: global.t('warnRemovedAfter3', userId, groupId),
      ...messageOptions
    })
    await sleep(1000)
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
  }
}

handler.help = ['warn @user']
handler.tags = ['group']
handler.command = /^(ammonisci|avvertimento|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

// Funzione di attesa
const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))