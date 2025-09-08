import '../lib/language.js';
const handler = async (msg, { client, conn }) => {
    const userId = msg.sender;
    const groupId = msg.isGroup ? msg.chat : null;
    
    const percent = Math.floor(Math.random() * 101);
    
    if (!conn?.sendMessage) throw new Error("Bro, manca il conn 😒");

    const savageReactions = [
        global.t('infameSavage1', userId, groupId, { percent: percent }),
        global.t('infameSavage2', userId, groupId),
        global.t('infameSavage3', userId, groupId),
        global.t('infameSavage4', userId, groupId),
        global.t('infameSavage5', userId, groupId),
        global.t('infameSavage6', userId, groupId),
        global.t('infameSavage7', userId, groupId),
        global.t('infameSavage8', userId, groupId)
    ];
    
    const randomSavage = savageReactions[Math.floor(Math.random() * savageReactions.length)];
    
    let levelMessage = percent > 80 
        ? global.t('infameLevelHigh', userId, groupId)
        : percent > 50 
        ? global.t('infameLevelMedium', userId, groupId)
        : global.t('infameLevelLow', userId, groupId);

    let response = `${global.t('infameTestTitle', userId, groupId)}\n\n` +
                  `${global.t('infameTestResult', userId, groupId, { percent: percent })}\n` +
                  `${levelMessage}\n\n` +
                  `${randomSavage}`;

    await conn.sendMessage(
        msg.chat, 
        { 
            text: response,
            mentions: [msg.sender],
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: global.t('infameAdTitle', userId, groupId),
                    body: global.t('infameAdBody', userId, groupId),
                    thumbnail: Buffer.alloc(0)
                }
            }
        }, 
        { quoted: msg }
    );
};

handler.command = ['infame', 'quantosbirro', 'sbirrocheck', 'snitch', 'rat'];
handler.tags = ['social'];
handler.help = ['infame @user', 'quantosbirro (scopri quanto sei infame)'];
export default handler;