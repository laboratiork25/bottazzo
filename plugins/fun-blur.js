import '../lib/language.js';
const handler = async (m, {conn, usedPrefix}) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/blur', {
        avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'hornycard.png', global.t('blurUsed', userId, groupId) || '✨ È stato usato!!\nChatUnity', m);
};
handler.help = ['blur', 'difuminar2'];
handler.tags = ['maker'];
handler.command = /^(blur|difuminar2)$/i;
export default handler;