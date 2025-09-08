import PhoneNumber from 'awesome-phonenumber';
import chalk from 'chalk';
import { watchFile } from 'fs';

const terminalImage = global.opts?.img ? await import('terminal-image') : null;
const urlRegex = (await import('url-regex-safe')).default({ strict: false });

export default async function (m, conn = { user: {} }) {
    const _name = await conn.getName(m.sender);
    const senderNumber = PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international');
    const sender = senderNumber + (_name ? ' ~' + _name : '');
    const chat = await conn.getName(m.chat);
    
    let img;
    if (global.opts?.img && /sticker|image/gi.test(m.mtype)) {
        try {
            img = await terminalImage.buffer(await m.download());
        } catch (e) {
            console.error(e);
        }
    }

    const filesize = m.msg?.vcard?.length || 
                    m.msg?.fileLength?.low || 
                    m.msg?.fileLength || 
                    m.msg?.axolotlSenderKeyDistributionMessage?.length || 
                    m.text?.length || 0;

    const user = global.db.data.users[m.sender];
    const me = PhoneNumber('+' + conn.user?.jid?.replace('@s.whatsapp.net', '')).getNumber('international') + ' ~' + conn.user.name;

    const oraItaliana = new Date().toLocaleString('it-IT', { 
        timeZone: 'Europe/Rome',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    const chatName = chat ? (m.isGroup ? 'Gruppo: ' + chat : 'Chat privata: ' + chat) : '';
    const fileSizeFormatted = filesize === 0 ? 0 : (filesize / 1000 ** Math.floor(Math.log10(filesize) / 3)).toFixed(1);
    const sizeUnit = ['', 'K', 'M', 'G', 'T'][Math.floor(Math.log10(filesize) / 3)] || '';
    const messageType = m.mtype?.replace(/message$/i, '')
                              .replace('audio', m.msg?.ptt ? 'PTT' : 'audio')
                              .replace(/^./, v => v.toUpperCase()) || '';

    console.log(`╭──⭑⭒──✦❘༻☾⋆⁺₊✧ ChatUnity-Bot ✧₊⁺⋆☽༺❘✦───⭒⭑
│🗣ㅤ${chalk.white(sender)}
│⏰ㅤ${chalk.cyanBright(oraItaliana)}
│📑ㅤ${chalk.cyanBright(m.messageStubType || 'WAMessageStubType')}
│🌐ㅤ${chalk.cyanBright(chatName)}
╰───────────────────···
`.trim());

    if (img) console.log(img.trimEnd());
    
    if (typeof m.text === 'string' && m.text) {
        let log = m.text.replace(/\u200e+/g, '');
        const mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~])(.+?)\1|```((?:.||[\n\r])+?)```)(?=\S?(?:[\s\n]|$))/g;
        
        const mdFormat = (depth = 4) => (_, type, text, monospace) => {
            const types = { _: 'italic', '*': 'bold', '~': 'strikethrough' };
            text = text || monospace;
            return !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(mdRegex, mdFormat(depth - 1)));
        };

        if (log.length < 4096) {
            log = log.replace(urlRegex, (url, i, text) => {
                const end = url.length + i;
                return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) 
                    ? chalk.blueBright(url) : url;
            });
        }

        log = log.replace(mdRegex, mdFormat(4));
        
        if (m.mentionedJid) {
            for (const user of m.mentionedJid) {
                const userName = await conn.getName(user);
                log = log.replace('@' + user.split('@')[0], chalk.blueBright('@' + userName));
            }
        }

        console.log(m.error ? chalk.red(log) : m.isCommand ? chalk.yellow(log) : log);
    }

    if (m.messageStubParameters) {
        const stubInfo = await Promise.all(m.messageStubParameters.map(async jid => {
            jid = conn.decodeJid(jid);
            const name = await conn.getName(jid);
            const phoneNumber = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international');
            return name ? chalk.gray(`${phoneNumber} (${name})`) : '';
        }));
        console.log(stubInfo.filter(Boolean).join(', '));
    }

    if (/document/i.test(m.mtype)) {
        console.log(`🗂️ ${m.msg.fileName || m.msg.displayName || 'Document'}`);
    } else if (/ContactsArray/i.test(m.mtype)) {
        console.log('👨‍👩‍👧‍👦');
    } else if (/contact/i.test(m.mtype)) {
        console.log(`👨 ${m.msg.displayName || ''}`);
    } else if (/audio/i.test(m.mtype)) {
        const duration = m.msg.seconds;
        console.log(`${m.msg.ptt ? '🎤 (PTT ' : '🎵 ('}AUDIO) ${Math.floor(duration / 60).toString().padStart(2, 0)}:${(duration % 60).toString().padStart(2, 0)}`);
    }

    console.log();
}

const file = global.__filename(import.meta.url);
watchFile(file, () => {
    console.log(chalk.redBright("Update 'lib/print.js'"));
});