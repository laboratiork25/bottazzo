import '../lib/language.js';
async function handler(m, { isBotAdmin, isOwner, text, conn }) {
  const userId = m.sender;
  const groupId = m.isGroup ? m.chat : null;
  if (!isBotAdmin) {
    return await conn.sendMessage(m.chat, {
      text: global.t('botMustBeAdmin', userId, groupId)
    }, { quoted: m })
  }

  const mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted
  if (!mention) {
    return await conn.sendMessage(m.chat, {
      text: global.t('mentionToRemove', userId, groupId)
    }, { quoted: m })
  }

  const ownerBot = global.owner[0][0] + '@s.whatsapp.net'

  if (mention === ownerBot) {
    return await conn.sendMessage(m.chat, {
      text: global.t('cannotRemoveOwnerBot', userId, groupId)
    }, { quoted: m })
  }

  if (mention === conn.user.jid) {
    return await conn.sendMessage(m.chat, {
      text: global.t('cannotRemoveBot', userId, groupId)
    }, { quoted: m })
  }

  if (mention === m.sender) {
    return await conn.sendMessage(m.chat, {
      text: global.t('cannotRemoveSelf', userId, groupId)
    }, { quoted: m })
  }

  const groupMetadata = conn.chats[m.chat]?.metadata
  const participants = groupMetadata?.participants || []
  const utente = participants.find(u => conn.decodeJid(u.id) === mention)

  const owner = utente?.admin === 'superadmin'
  const admin = utente?.admin === 'admin'

  if (owner) {
    return await conn.sendMessage(m.chat, {
      text: global.t('targetIsGroupOwner', userId, groupId)
    }, { quoted: m })
  }

  if (admin) {
    return await conn.sendMessage(m.chat, {
      text: global.t('targetIsAdmin', userId, groupId)
    }, { quoted: m })
  }

  const cleanReason = text ? text.replace(/@\d+/g, '').trim() : ''
  await conn.sendMessage(m.chat, {
    text: global.t('kickRemoved', userId, groupId, { target: mention.split`@`[0], by: m.sender.split`@`[0], reason: cleanReason }),
    mentions: [mention, m.sender]
  }, { quoted: m })

  await conn.groupParticipantsUpdate(m.chat, [mention], 'remove')
}

handler.customPrefix = /kick|avadachedavra|sparisci|puffo/i
handler.command = new RegExp
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler