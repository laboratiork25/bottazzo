/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                        CHATUNITY BOT - MESSAGE HANDLER                      ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Enhanced Plugin System & Anti-Spam Protection                    ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  Gestore principale dei messaggi con sistema anti-spam avanzato,           ║
 * ║  gestione plugin dinamica e supporto per comandi multilingue.             ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'

const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

global.ignoredUsersGlobal = global.ignoredUsersGlobal || new Set()
global.ignoredUsersGroup = global.ignoredUsersGroup || {}
global.groupSpam = global.groupSpam || {}

// Cache leggero per groupMetadata per ridurre I/O e accelerare risposte
global.__groupMetaCache = global.__groupMetaCache || new Map()
async function getGroupMetadataCached(conn, jid, ttlMs = 30_000) {
    if (!jid) return {}
    const now = Date.now()
    const cached = global.__groupMetaCache.get(jid)
    if (cached && (now - cached.time) < ttlMs) return cached.data
    const data = ((conn.chats[jid] || {}).metadata) || await conn.groupMetadata(jid).catch(_ => ({})) || {}
    global.__groupMetaCache.set(jid, { time: now, data })
    return data
}

/**
 * Handle messages upsert
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
    // Inizializzazione sicura delle stats
    if (!global.db.data.stats) global.db.data.stats = {}
    const stats = global.db.data.stats

    this.msgqueque = this.msgqueque || []
    if (!chatUpdate) return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m) return
    if (global.db.data == null) await global.loadDatabase()

    // Funzione per verificare se è un owner
    const isOwner = (() => {
        try {
            const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)]
                .filter(Boolean)
                .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
                .includes(m.sender)
            return isROwner || m.fromMe
        } catch { 
            return false 
        }
    })()

    // Funzione migliorata per verificare i prefissi
    const hasValidPrefix = (text, prefixes) => {
        if (!text || typeof text !== 'string') return false
        
        // Se prefixes è una regex, usa test()
        if (prefixes instanceof RegExp) {
            return prefixes.test(text)
        }
        
        // Se prefixes è un array, controlla ogni elemento
        const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes]
        
        return prefixList.some(p => {
            if (p instanceof RegExp) {
                return p.test(text)
            } else if (typeof p === 'string') {
                return text.startsWith(p)
            }
            return false
        })
    }

    // Sistema anti-spam comandi avanzato (solo per comandi testuali)
    if (m.isGroup && !isOwner && typeof m.text === 'string' && hasValidPrefix(m.text, conn.prefix || global.prefix)) {
        if (!global.groupSpam[m.chat]) {
            global.groupSpam[m.chat] = {
                count: 0,
                firstCommandTimestamp: Date.now(),
                isSuspended: false
            }
        }

        const groupData = global.groupSpam[m.chat]
        const now = Date.now()

        if (groupData.isSuspended) return

        if (now - groupData.firstCommandTimestamp > 60000) {
            groupData.count = 1
            groupData.firstCommandTimestamp = now
        } else {
            groupData.count++
        }
        
        if (groupData.count > 2) {
            groupData.isSuspended = true
            await this.sendMessage(m.chat, {
                text: '『 ⚠ 』 Anti-spam comandi\n\nRilevati troppi comandi in un minuto, aspettate 10 secondi prima di riutilizzare i comandi.\n\n> SVILUPPATO DA SAM-VARE',
                mentions: [m.sender]
            })
            setTimeout(() => {
                groupData.isSuspended = false
                groupData.count = 0
                groupData.firstCommandTimestamp = Date.now()
            }, 10000)
            return
        }
    }

    try {
        m = smsg(this, m) || m
        if (!m) return
        m.exp = 0
        m.limit = false
        
        try {
            // Inizializzazione dati utente
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            
            if (user) {
                if (!isNumber(user.messaggi)) user.messaggi = 0
                if (!isNumber(user.blasphemy)) user.blasphemy = 0
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.money)) user.money = 0 
                if (!isNumber(user.warn)) user.warn = 0
                if (!isNumber(user.joincount)) user.joincount = 2   
                if (!isNumber(user.limit)) user.limit = 20
                if (!('premium' in user)) user.premium = false
                if (!isNumber(user.premiumDate)) user.premiumDate = -1
                if (!('name' in user)) user.name = m.name
                if (!('muto' in user)) user.muto = false
            } else {
                global.db.data.users[m.sender] = {
                    messaggi: 0,
                    blasphemy: 0,
                    exp: 0,
                    money: 0,
                    warn: 0,
                    joincount: 2,
                    limit: 20,
                    premium: false,
                    premiumDate: -1,
                    name: m.name,
                    muto: false
                }
            }
            
            // Inizializzazione dati chat
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
            
            if (chat) {
                if (!('isBanned' in chat)) chat.isBanned = false
                if (!('detect' in chat)) chat.detect = true
                if (!('delete' in chat)) chat.delete = false
                if (!('antiLink' in chat)) chat.antiLink = true
                if (!('antiTraba' in chat)) chat.antiTraba = true
                if (!isNumber(chat.expired)) chat.expired = 0
                if (!isNumber(chat.messaggi)) chat.messaggi = 0
                if (!('name' in chat)) chat.name = this.getName(m.chat)
                if (!('antispamcomandi' in chat)) chat.antispamcomandi = true
            } else {
                global.db.data.chats[m.chat] = {
                    name: this.getName(m.chat),
                    isBanned: false,
                    detect: true,
                    delete: false,
                    antiLink: true,
                    antiTraba: true,
                    expired: 0,
                    messaggi: 0,
                    antispamcomandi: true
                }
            }
            
            // Inizializzazione settings
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('restrict' in settings)) settings.restrict = true
            } else {
                global.db.data.settings[this.user.jid] = {
                    self: false,
                    autoread: false,
                    restrict: true
                }
            }
        } catch (e) {
            console.error(e)
        }

        if (opts['nyimak']) return
        if (!m.fromMe && opts['self']) return
        if (opts['pconly'] && m.chat.endsWith('g.us')) return
        if (opts['gconly'] && !m.chat.endsWith('g.us')) return

        if (typeof m.text !== 'string') m.text = ''

        // Verifica permessi utente
        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)]
            .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
            .includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || isOwner || isMods || global.db.data.users[m.sender]?.premiumTime > 0

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque, time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys) return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data?.users?.[m.sender]

        const groupMetadata = m.isGroup ? (await getGroupMetadataCached(this, m.chat)) : {}
        const participants = (m.isGroup ? groupMetadata.participants : []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {}
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false
        const isBotAdmin = bot?.admin || false

        // Gestione plugin
        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin || plugin.disabled) continue
            const __filename = join(___dirname, name)
            
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    console.error(e)
                }
            }

            if (!opts['restrict'] && plugin.tags?.includes('admin')) continue

            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
            let match = (_prefix instanceof RegExp ? 
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? 
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? p : new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? 
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
            ).find(p => p[1])

            if (typeof plugin.before === 'function') {
                const beforeResult = await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                })
                if (beforeResult) {
                    if (m.__stopProcessing) break
                    continue
                }
            }

            if (typeof plugin !== 'function') continue

            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [commandInput, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                const userIdCtx = m.sender
                const groupIdCtx = m.isGroup ? m.chat : null
                const originalCommand = (commandInput || '').toLowerCase()
                // Canonicalize by language (group language takes precedence)
                const canonicalCommand = global.languageManager
                    ? global.languageManager.canonicalizeCommand(originalCommand, userIdCtx, groupIdCtx)
                    : originalCommand
                let fail = plugin.fail || global.dfail
                let isAccept = plugin.command instanceof RegExp ? 
                    plugin.command.test(canonicalCommand) :
                    Array.isArray(plugin.command) ? 
                        plugin.command.some(cmd => cmd instanceof RegExp ? cmd.test(canonicalCommand) : cmd === canonicalCommand) :
                        typeof plugin.command === 'string' ? 
                            plugin.command === canonicalCommand :
                            false

                if (!isAccept) continue
                
                m.plugin = name
                if ((m.chat in global.db.data.chats || m.sender in global.db.data.users)) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && chat?.isBanned) return
                    if (name != 'owner-unbanuser.js' && user?.banned) return
                }

                let hl = _prefix 
                let adminMode = global.db.data.chats[m.chat]?.soloadmin
                let mystica = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`
                if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && mystica) return

                // Controlli permessi
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) {
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) {
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) {
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) {
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) {
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) {
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) {
                    fail('private', m, this)
                    continue
                }
                if (plugin.register == true && _user?.registered == false) {
                    fail('unreg', m, this)
                    continue
                }

                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17
                if (xp > 2000) m.reply('Exp limit')
                else if (plugin.money && global.db.data.users[m.sender]?.money < plugin.money * 1) {
                    fail('senzasoldi', m, this)
                    continue
                }
                m.exp += xp

                if (!isPrems && plugin.limit && global.db.data.users[m.sender]?.limit < plugin.limit * 1) {
                    this.reply(m.chat, `diamanti terminati`, m)
                    continue
                }
                if (plugin.level > _user?.level) {
                    this.reply(m.chat, `livello troppo basso`, m)
                    continue
                }

                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command: canonicalCommand,
                    originalCommand,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }

                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems) {
                        m.limit = m.limit || plugin.limit || false
                        m.money = m.money || plugin.money || false 
                    }
                } catch (e) {
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        m.reply(text)
                    }
                } finally {
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                        if (m.money) m.reply(+m.money + ' 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🐱 𝙐𝙎𝘼𝘿𝙊(𝙎)') 
                    }
                    if (m.limit) m.reply(+m.limit + ' diamante usato')
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        // Pulizia e aggiornamento dati
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }

        if (m?.sender) {
            let user = global.db.data.users[m.sender]
            let chat = global.db.data.chats[m.chat]
            
            // Gestione utenti mutati
            if (user?.muto) {
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                })
            }
            
            // Aggiornamento statistiche utente/chat
            if (user) {
                user.exp += m.exp
                user.limit -= m.limit * 1
                user.money -= m.money * 1
                user.messaggi += 1
            }
            if (chat) chat.messaggi += 1
        }

        // Tracciamento statistiche plugin
        if (m?.plugin) {
            let now = +new Date
            if (!stats[m.plugin]) {
                stats[m.plugin] = {
                    total: 0,
                    success: 0,
                    last: 0,
                    lastSuccess: 0
                }
            }
            const stat = stats[m.plugin]
            stat.total += 1
            stat.last = now
            if (!m.error) {
                stat.success += 1
                stat.lastSuccess = now
            }
        }

        try {
            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (opts['autoread']) await this.readMessages([m.key])
    }
}

export async function participantsUpdate({ id, participants, action }) {
    if (opts['self']) return
    if (this.isInit) return
    if (global.db.data == null) await loadDatabase()
    let chat = global.db.data.chats[id] || {}
}

export async function groupsUpdate(groupsUpdate) {
    if (opts['self']) return
    for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id], text = ''
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```immagine modificata```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```link reimpostato, nuovo link:```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) })
    }
}

export async function callUpdate(callUpdate) {
    let isAnticall = global.db.data.settings[this.user.jid].antiCall
    if (!isAnticall) return
    for (let nk of callUpdate) {
        if (nk.isGroup == false) {
            if (nk.status == "offer") {
                let callmsg = await this.reply(nk.from, `ciao @${nk.from.split('@')[0]}, c'è anticall.`, false, { mentions: [nk.from] })
                let vcard = `BEGIN:VCARD\nVERSION:5.0\nN:;𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲;;;\nFN:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nORG:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nTITLE:\nitem1.TEL;waid=393515533859:+39 3515533859\nitem1.X-ABLabel:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲\nEND:VCARD`
                await this.sendMessage(nk.from, { contacts: { displayName: 'Unlimited', contacts: [{ vcard }] }}, {quoted: callmsg})
                await this.updateBlockStatus(nk.from, 'block')
            }
        }
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe) return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg) return
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞̀ 𝐬𝐨𝐥𝐨 𝐩𝐞𝐫 𝐨𝐰𝐧𝐞𝐫 🕵🏻‍♂️',
        owner: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞̀ 𝐬𝐨𝐥𝐨 𝐩𝐞𝐫 𝐨𝐰𝐧𝐞𝐫 🕵🏻‍♂️',
        mods: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐥𝐨 𝐩𝐨𝐬𝐬𝐨𝐧𝐨 𝐮𝐭𝐢𝐥𝐢𝐳𝐳𝐚𝐫𝐞 𝐬𝐨𝐥𝐨 𝐚𝐝𝐦𝐢𝐧 𝐞 𝐨𝐰𝐧𝐞𝐫 ⚙️',
        premium: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞̀ 𝐩𝐞𝐫 𝐦𝐞𝐦𝐛𝐫𝐢 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 ✅',
        group: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐮𝐨𝐢 𝐮𝐭𝐢𝐥𝐢𝐳𝐳𝐚𝐫𝐥𝐨 𝐢𝐧 𝐮𝐧 𝐠𝐫𝐮𝐩𝐩𝐨 👥',
        private: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐮𝐨𝐢 𝐮𝐭𝐢𝐥𝐢𝐳𝐳𝐚𝐫𝐥𝐨 𝐢𝐧 𝐜𝐡𝐚𝐭 𝐩𝐫𝐢𝐯𝐚𝐭𝐚 👤',
        admin: '𝐐𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞̀ 𝐩𝐞𝐫 𝐬𝐨𝐥𝐢 𝐚𝐝𝐦𝐢𝐧 👑',
        botAdmin: '𝐃𝐞𝐯𝐢 𝐝𝐚𝐫𝐞 𝐚𝐝𝐦𝐢𝐧 𝐚𝐥 𝐛𝐨𝐭 👑',
        restrict: '🔐 𝐑𝐞𝐬𝐭𝐫𝐢𝐜𝐭 𝐞 𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐨 🔐'
    }[type]
    if (msg) return conn.sendMessage(m.chat, { 
        text: ' ', 
        contextInfo: {
            "externalAdReply": {
                "title": `${msg}`, 
                "body": ``, 
                "previewType": "PHOTO",
                "thumbnail": fs.readFileSync('./accessdenied2.png'),
                "mediaType": 1,
                "renderLargerThumbnail": true
            }
        }
    }, {quoted: m})
}

const file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
    unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    if (global.reloadHandler) console.log(await global.reloadHandler())
})
