import '../lib/language.js';
const handler = async (m, { conn, args }) => {
    const metadata = await conn.groupMetadata(m.chat);
    const groupName = metadata.subject;

    const interactiveButtons = [
        {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: "Copia",
                id: 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat),
                copy_code: 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
            })
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Reimposta",
                id: `/reimpostagruppo ${m.chat}`,
            })
        }
    ];

    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    const interactiveMessage = {
        text: `*${groupName}*`,
        title: global.t('groupLinkTitle', userId, groupId),
        footer: global.t('groupLinkFooter', userId, groupId),
        interactiveButtons
    };

    await conn.sendMessage(m.chat, interactiveMessage, { quoted: m });
};

handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;
