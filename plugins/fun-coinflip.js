import '../lib/language.js';
let handler = async (m, { conn, usedPrefix, args }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let user = global.db.data.users[m.sender];
    let puntata = parseInt(args[0]);

    if (!puntata) {
        return await conn.sendMessage(m.chat, {
            text: global.t('coinflipChooseAmount', userId, groupId),
            footer: global.t('coinflipFooter', userId, groupId),
            buttons: [
                { buttonId: `${usedPrefix}coinflip 10`, buttonText: { displayText: global.t('coinflipBet10', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 50`, buttonText: { displayText: global.t('coinflipBet50', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 100`, buttonText: { displayText: global.t('coinflipBet100', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 500`, buttonText: { displayText: global.t('coinflipBet500', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 1000`, buttonText: { displayText: global.t('coinflipBet1000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 5000`, buttonText: { displayText: global.t('coinflipBet5000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 10000`, buttonText: { displayText: global.t('coinflipBet10000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 50000`, buttonText: { displayText: global.t('coinflipBet50000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 100000`, buttonText: { displayText: global.t('coinflipBet100000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 500000`, buttonText: { displayText: global.t('coinflipBet500000', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix}coinflip 1000000`, buttonText: { displayText: global.t('coinflipBet1000000', userId, groupId) }, type: 1 }
            ],
            headerType: 1
        }, { quoted: m })
    }

    if (isNaN(puntata) || puntata <= 0) {
        return conn.reply(m.chat, global.t('coinflipInvalidBet', userId, groupId), m)
    }

    if (puntata > user.money) {
        let deficit = puntata - user.money;
        return conn.reply(m.chat, global.t('coinflipInsufficient', userId, groupId, { deficit }), m)
    }

    let scelta = Math.random() < 0.5 ? global.t('coinflipHeads', userId, groupId) : global.t('coinflipTails', userId, groupId);
    let risultato = Math.random() < 0.5 ? global.t('coinflipHeads', userId, groupId) : global.t('coinflipTails', userId, groupId);
    let win = (scelta === risultato);

    if (win) {
        user.money += puntata
    } else {
        user.money -= puntata
    }

    let response = global.t('coinflipResult', userId, groupId, {
        risultato: risultato,
        scelta: scelta,
        win: win,
        puntata: puntata
    });

    await conn.sendMessage(m.chat, {
        text: response,
        footer: global.t('coinflipFooter', userId, groupId),
        buttons: [
            { buttonId: `.coinflip ${puntata}`, buttonText: { displayText: global.t('coinflipHeadsButton', userId, groupId, { puntata }) }, type: 1 },
            { buttonId: `.coinflip ${puntata}`, buttonText: { displayText: global.t('coinflipTailsButton', userId, groupId, { puntata }) }, type: 1 },
            { buttonId: `.coinflip`, buttonText: { displayText: global.t('coinflipChangeBet', userId, groupId) }, type: 1 }
        ],
        headerType: 1
    }, { quoted: m })
}

handler.command = /^(coinflip)$/i
export default handler