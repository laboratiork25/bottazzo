import '../lib/language.js';
let buatall = 1;
let cooldowns = {};

const rcanal = "default_value";

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let user = global.db.data.users[m.sender];
    let randomaku = Math.floor(Math.random() * 101);
    let randomkamu = Math.floor(Math.random() * 55);
    let Aku = randomaku * 1;
    let Kamu = randomkamu * 1;
    let count = args[0];
    let who = m.fromMe ? conn.user.jid : m.sender;
    let username = conn.getName(who);

    let tiempoEspera = 15;

    if (args.length < 1) {
        const maxUC = Math.max(10, Math.floor(user.limit / 2));
        const tagli = [10, 50, 100, 250, 500, 1000].filter(n => n <= maxUC);
        return conn.sendMessage(m.chat, {
            text: global.t('casinoChooseAmount', userId, groupId, { usedPrefix, command }),
            buttons: tagli.map(n => ({
                buttonId: `${usedPrefix + command} ${n}`,
                buttonText: { displayText: global.t('casinoBetAmount', userId, groupId, { amount: n }) },
                type: 1
            }))
        }, { quoted: m });
    }

    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
        let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000));
        conn.reply(m.chat, global.t('casinoCooldown', userId, groupId, { tiempoRestante }), m, rcanal);
        return;
    }

    cooldowns[m.sender] = Date.now();

    count = count
        ? /all/i.test(count)
            ? Math.floor(global.db.data.users[m.sender].limit / buatall)
            : parseInt(count)
        : args[0]
        ? parseInt(args[0])
        : 1;
    count = Math.max(1, count);

    if (user.limit >= count * 1) {
        user.limit -= count * 1;
        if (Aku > Kamu) {
            conn.reply(m.chat, global.t('casinoLose', userId, groupId, { bot: Aku, user: Kamu, username, count }), m, rcanal);
        } else if (Aku < Kamu) {
            user.limit += count * 2;
            conn.reply(m.chat, global.t('casinoWin', userId, groupId, { bot: Aku, user: Kamu, username, count }), m, rcanal);
        } else {
            user.limit += count * 1;
            conn.reply(m.chat, global.t('casinoDraw', userId, groupId, { bot: Aku, user: Kamu, username, count }), m, rcanal);
        }
    } else {
        conn.reply(m.chat, global.t('casinoNotEnough', userId, groupId, { count }), m, rcanal);
    }
};

handler.help = ['scommetti <quantità>'];
handler.tags = ['game'];
handler.command = /^(scommetti|casinò|casino)$/i;
handler.register = true;
handler.fail = null;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

function segundosAHMS(segundos) {
    let minuti = Math.floor(segundos / 60);
    let secondi = segundos % 60;
    return global.t('timeFormat', null, null, { minutes: minuti, seconds: secondi }) || `${minuti}m ${secondi}s`;
}