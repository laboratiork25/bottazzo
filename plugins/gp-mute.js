import '../lib/language.js';

let handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
  // Check if the command is being used in a group
  if (!m.isGroup) {
    return conn.reply(m.chat, global.t('smsOnlyGroup', m.sender, null), m);
  }

  // Check if the user is an admin or owner
  if (!isAdmin && !isOwner) {
    return conn.reply(m.chat, global.t('adminOnly', m.sender, m.chat), m);
  }

  // Check if the bot is admin
  const botJid = conn.user.jid;
  const groupMetadata = await conn.groupMetadata(m.chat);
  const botIsAdmin = groupMetadata.participants.find(p => p.id === botJid)?.admin;

  if (!botIsAdmin) {
    return conn.reply(m.chat, global.t('botMustBeAdmin', m.sender, m.chat), m);
  }

  // Get the target user
  let who;
  if (m.quoted && m.quoted.sender) {
    who = m.quoted.sender;
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    who = m.mentionedJid[0];
  } else {
    return conn.reply(m.chat, global.t('warnNeedTarget', m.sender, m.chat), m);
  }

  // Validate target user
  if (who.includes('@s.whatsapp.net')) {
    const userJid = who.split('@')[0] + '@s.whatsapp.net';
    
    // Check if trying to mute the bot itself
    if (userJid === botJid) {
      return conn.reply(m.chat, global.t('cannotRemoveBot', m.sender, m.chat), m);
    }
    
    // Check if trying to mute the group owner
    const user = groupMetadata.participants.find(p => p.id === userJid);
    if (user?.admin === 'superadmin') {
      return conn.reply(m.chat, global.t('targetIsGroupOwner', m.sender, m.chat), m);
    }
    
    // Handle mute vs unmute
    if (command === 'mute' || command === 'muta') {
      // Mute user
      if (!global.db.data.users[userJid]) {
        global.db.data.users[userJid] = { muto: false };
      }
      
      if (global.db.data.users[userJid].muto) {
        return conn.reply(m.chat, global.t('alreadyMuted', m.sender, m.chat), m);
      }
      
      // Set mute duration if provided
      let duration = 0;
      let reason = '';
      const args = text.split(' ');
      if (args.length > 0 && !isNaN(args[0])) {
        duration = parseInt(args[0]) * 60000; // Convert minutes to milliseconds
        reason = args.slice(1).join(' ');
      } else {
        reason = text;
      }
      
      global.db.data.users[userJid].muto = true;
      
      // If duration is specified, schedule unmute
      if (duration > 0) {
        setTimeout(() => {
          if (global.db.data.users[userJid]) {
            global.db.data.users[userJid].muto = false;
          }
        }, duration);
      }
      
      const muteMessage = global.t('userMuted', m.sender, m.chat, { 
        user: who.split('@')[0], 
        muter: m.sender.split('@')[0],
        duration: args[0],
        reason: reason || global.t('noReason', m.sender, m.chat)
      });
      
      await conn.reply(m.chat, muteMessage, m, { mentions: [userJid] });
    } else if (command === 'unmute' || command === 'smuta') {
      // Unmute user
      if (!global.db.data.users[userJid]) {
        global.db.data.users[userJid] = { muto: false };
      }
      
      if (!global.db.data.users[userJid].muto) {
        return conn.reply(m.chat, global.t('alreadyUnmuted', m.sender, m.chat), m);
      }
      
      global.db.data.users[userJid].muto = false;
      
      const unmuteMessage = global.t('userUnmuted', m.sender, m.chat, { 
        user: who.split('@')[0], 
        muter: m.sender.split('@')[0]
      });
      
      await conn.reply(m.chat, unmuteMessage, m, { mentions: [userJid] });
    }
  }
};

handler.command = /^(mute|unmute|muta|smuta)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
