import { googleImage } from '@bochilteam/scraper'
import { existsSync } from 'fs'
import axios from 'axios'
import '../lib/language.js'

const bannedWords = [
    'porn', 'sex', 'nude', 'naked', 'xxx', 'adult', 'nsfw',
    'porno', 'sesso', 'nudo', 'nuda', 'adulti', 'vietato'
]

const handler = async (m, { conn, text, usedPrefix, command }) => {
    const userId = m.sender
    const groupId = m.isGroup ? m.chat : null
    
    if (!text) {
        const helpMessage = global.t('imageSearchHelp', userId, groupId) || 
            `🔍 *CERCA IMMAGINI*\n\nUso: ${usedPrefix}${command} <termine di ricerca>\n\nEsempio: ${usedPrefix}${command} gatto carino`
        return conn.reply(m.chat, helpMessage, m)
    }
    
    // Check for banned words
    const searchTerm = text.toLowerCase()
    const hasBannedWord = bannedWords.some(word => searchTerm.includes(word))
    
    if (hasBannedWord) {
        const bannedMessage = global.t('imageSearchBanned', userId, groupId) || 
            '❌ Termine di ricerca non consentito. Usa termini appropriati.'
        return conn.reply(m.chat, bannedMessage, m)
    }
    
    const waitMessage = global.t('smsWait', userId, groupId) || '🔍 Cercando immagini...'
    await conn.reply(m.chat, waitMessage, m)
    
    try {
        const results = await googleImage(text)
        
        if (!results || results.length === 0) {
            const noResultsMessage = global.t('imageSearchNoResults', userId, groupId) || 
                '❌ Nessuna immagine trovata per la ricerca specificata.'
            return conn.reply(m.chat, noResultsMessage, m)
        }
        
        // Get random image from results
        const randomImage = results[Math.floor(Math.random() * Math.min(results.length, 10))]
        
        if (!randomImage || !randomImage.url) {
            const errorMessage = global.t('imageSearchError', userId, groupId) || 
                '❌ Errore nel recupero dell\'immagine.'
            return conn.reply(m.chat, errorMessage, m)
        }
        
        // Send the image
        const caption = global.t('imageSearchResult', userId, groupId) || 
            `🔍 *Risultato ricerca:* ${text}\n\n📷 Fonte: Google Images`
        
        await conn.sendFile(m.chat, randomImage.url, 'image.jpg', caption, m)
        
    } catch (error) {
        console.error('Image search error:', error)
        
        let errorMessage
        if (error.message?.includes('network') || error.message?.includes('timeout')) {
            errorMessage = global.t('imageSearchNetworkError', userId, groupId) || 
                '❌ Errore di rete. Riprova più tardi.'
        } else {
            errorMessage = global.t('smsError', userId, groupId) || 
                '❌ Si è verificato un errore durante la ricerca.'
        }
        
        await conn.reply(m.chat, errorMessage, m)
    }
}

handler.help = ['cercimg', 'immagine', 'img', 'image']
handler.tags = ['tools']
handler.command = /^(cercimg|immagine|img|image)$/i

export default handler
