import fs from "fs";
import path from "path";
import '../lib/language.js';

const PLAY_FOLDER = "./play"; // 📂 Cartella MP3

let handler = async (m, { conn, isAdmin, isOwner }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    if (!isAdmin && !isOwner) {
        return conn.sendMessage(m.chat, { text: global.t('clearplayOnlyAdmins', userId, groupId) }, { quoted: m });
    }

    if (!fs.existsSync(PLAY_FOLDER)) {
        return conn.sendMessage(m.chat, { text: global.t('clearplayAlreadyEmpty', userId, groupId) }, { quoted: m });
    }

    let files = fs.readdirSync(PLAY_FOLDER);
    if (files.length === 0) {
        return conn.sendMessage(m.chat, { text: global.t('clearplayNoFiles', userId, groupId) }, { quoted: m });
    }

    // 🗑️ Elimina tutti i file MP3
    for (let file of files) {
        let filePath = path.join(PLAY_FOLDER, file);
        fs.unlinkSync(filePath);
    }

    await conn.sendMessage(m.chat, { 
        text: global.t('clearplaySuccess', userId, groupId), 
        react: { text: "✅", key: m.key } 
    }, { quoted: m });
};

handler.command = /^(clearplay)$/i;
handler.group = true;
handler.admin = true;

export default handler;