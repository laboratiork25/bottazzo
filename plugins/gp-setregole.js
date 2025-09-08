import '../lib/language.js';
let handler = async function (m, { conn, text, usedPrefix }) {
  let chat = global.db.data.chats[m.chat];
  if (text) {
    chat.rules = text;
    await conn.sendMessage(m.chat, { 
        text: global.t('groupRulesSetSuccess', m.sender, m.chat),
        contextInfo: {
            forwardingScore: 99,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: 'ChatUnity'
            }
        }
    }, { quoted: m });
  } else throw global.t('groupRulesNotSet', m.sender, m.chat);
};

handler.help = ['setrules <text>'];
handler.tags = ['group'];
handler.command = ['setrules', 'setregole'];
handler.group = true;
handler.admin = true;

export default handler;