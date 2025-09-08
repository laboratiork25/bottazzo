
import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
import fs from 'fs';
import '../lib/language.js';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
    const who = mention || m.sender;

    if (!global.db.data.users) global.db.data.users = {};
    if (!global.db.data.users[who]) global.db.data.users[who] = { amici: [] };

    const user = global.db.data.users[who];
    const friends = user.amici || [];

    const lastFriend = friends[friends.length - 1];
    const lastFriendName = lastFriend ? lastFriend.split('@')[0] : global.t('friendsNone', userId, groupId);

    const friendList = friends.length > 0
      ? friends.map((friend, index) => `${index + 1}. @${friend.split('@')[0]}`).join('\n')
      : global.t('friendsNone', userId, groupId);

    const displayName = user.name && user.name.trim() !== '' ? user.name : 'Sconosciuto';
    const title = global.t('friendsListTitle', userId, groupId, { name: displayName });
    const last = global.t('friendsLastFriend', userId, groupId, { last: friends.length > 0 ? '@' + lastFriendName : global.t('friendsNone', userId, groupId) });
    const listLabel = global.t('friendsCompleteList', userId, groupId);
    const noneLine = global.t('friendsLoneWolf', userId, groupId);
    const message = `${title}\n┌───────────────\n│ ${last}\n│\n│ ${listLabel}\n${friends.length > 0 ? friendList : noneLine}\n└───────────────`;

    await conn.sendMessage(m.chat, {
      text: message,
      mentions: friends
    }, { quoted: m });

  } catch (err) {
    console.error('Error in handler:', err);
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    conn.reply(m.chat, global.t('friendsError', userId, groupId));
  }
};

handler.command = ['listamici'];
export default handler;