import MessageType from '@whiskeysockets/baileys'
import '../lib/language.js';
let handler = async (m, { conn, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    
    let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
    if (room == undefined) return conn.reply(m.chat, global.t('tttExitNoGame', userId, groupId), null, [[global.t('tttStartNewGame', userId, groupId), `${usedPrefix}ttt partida nueva`]], m)
    delete conn.game[room.id]
    await m.reply(global.t('tttExitSuccess', userId, groupId))
}
handler.command = /^(delttt|deltt|esci|deltictactoe|exitttt)$/i
handler.fail = null
export default handler