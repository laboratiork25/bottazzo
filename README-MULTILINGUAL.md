# 🌍 ChatUnity Bot - Sistema Multilingue

## Panoramica

ChatUnity Bot ora supporta completamente il sistema multilingue con **Italiano** e **Inglese**. Gli utenti possono cambiare lingua facilmente tramite comandi WhatsApp.

## 🚀 Caratteristiche

- ✅ **Supporto completo per Italiano e Inglese**
- ✅ **Cambio lingua per utente individuale**
- ✅ **Cambio lingua per gruppo**
- ✅ **Oltre 300 plugin aggiornati**
- ✅ **Sistema di traduzione automatica**
- ✅ **Messaggi di benvenuto/addio multilingue**
- ✅ **Interfaccia utente migliorata**

## 📋 Comandi Lingua

### Cambiare Lingua
```
.lingua it    # Imposta Italiano 🇮🇹
.lingua en    # Imposta Inglese 🇺🇸
.lingua       # Mostra lingua attuale
```

### Alias Supportati
```
.language it/en
.lang it/en
```

## 🔧 Struttura Tecnica

### File Principali
- `lib/language.js` - Sistema di gestione lingue
- `lib/idiomas/italiano.js` - Traduzioni italiane
- `lib/idiomas/english.js` - Traduzioni inglesi
- `plugins/language-manager.js` - Comando cambio lingua

### Sistema di Traduzione
```javascript
// Uso base
const message = global.t('smsWait', userId, groupId)

// Con parametri
const message = global.t('welcomeDefault', userId, groupId, {
  user: username,
  group: groupName,
  members: memberCount
})
```

## 📚 Chiavi di Traduzione Disponibili

### Messaggi Generali
- `smsAvisoMG` - Messaggio di avviso
- `smsWait` - Caricamento
- `smsError` - Errore generico
- `smsSuccess` - Successo
- `smsProcessing` - Elaborazione

### Restrizioni Comandi
- `smsOnlyGroup` - Solo gruppi
- `smsOnlyAdmin` - Solo admin
- `smsOnlyOwner` - Solo proprietario
- `smsOnlyPremium` - Solo premium

### Sistema AI
- `aiNoQuery` - Richiesta mancante
- `aiError` - Errore AI
- `aiProcessing` - Elaborazione AI

### Sistema Benvenuto/Addio
- `welcomeTitle` - Titolo benvenuto
- `goodbyeTitle` - Titolo addio
- `welcomeDefault` - Messaggio predefinito benvenuto
- `goodbyeDefault` - Messaggio predefinito addio

### Sistema File e Media
- `fileNotFound` - File non trovato
- `fileTooLarge` - File troppo grande
- `invalidFormat` - Formato non valido

## 🛠️ Aggiornamento Plugin

### Plugin Aggiornati Automaticamente
Il sistema include un updater automatico che:
1. Aggiunge import del sistema lingua
2. Sostituisce testo hardcoded con chiavi di traduzione
3. Aggiorna chiamate reply/send per usare traduzioni

### Esempio Aggiornamento Plugin
```javascript
// PRIMA
conn.reply(m.chat, '❌ Questo comando funziona solo nei gruppi!', m)

// DOPO
const message = global.t('smsOnlyGroup', m.sender, m.isGroup ? m.chat : null)
conn.reply(m.chat, message, m)
```

## 📁 Struttura Directory

```
chatunity-bot/
├── lib/
│   ├── language.js           # Sistema principale
│   ├── plugin-updater.js     # Updater automatico
│   └── idiomas/
│       ├── italiano.js       # Traduzioni IT
│       └── english.js        # Traduzioni EN
├── plugins/
│   ├── language-manager.js   # Comando lingua
│   ├── help-menu.js         # Menu aiuto multilingue
│   └── [300+ plugin aggiornati]
└── update-plugins.js         # Script aggiornamento
```

## 🎯 Utilizzo per Sviluppatori

### Aggiungere Nuove Traduzioni
1. Modifica `lib/idiomas/italiano.js` e `lib/idiomas/english.js`
2. Aggiungi la chiave di traduzione
3. Usa `global.t('nuovaChiave', userId, groupId)` nei plugin

### Creare Nuovo Plugin Multilingue
```javascript
import '../lib/language.js'

const handler = async (m, { conn }) => {
  const message = global.t('smsWait', m.sender, m.isGroup ? m.chat : null)
  await conn.reply(m.chat, message, m)
}

export default handler
```

## 🔄 Aggiornamento Automatico

Per aggiornare tutti i plugin esistenti:
```bash
node update-plugins.js
```

Il sistema:
- ✅ Scansiona tutti i file .js in /plugins
- ✅ Aggiunge import del sistema lingua
- ✅ Sostituisce testo italiano hardcoded
- ✅ Mantiene backup dei file originali
- ✅ Genera report dettagliato

## 📊 Statistiche Aggiornamento

- **Plugin Totali**: 327
- **Plugin Aggiornati**: ~300+
- **Lingue Supportate**: 2 (IT, EN)
- **Chiavi Traduzione**: 50+
- **Compatibilità**: 100%

## 🌟 Caratteristiche Avanzate

### Preferenze Persistenti
- Le preferenze lingua vengono salvate nel database
- Ripristino automatico al riavvio
- Supporto per utenti e gruppi separati

### Sistema Priorità
1. **Preferenza utente individuale**
2. **Preferenza gruppo**
3. **Lingua predefinita (Italiano)**

### Fallback Intelligente
- Se una traduzione manca, usa la chiave originale
- Supporto per funzioni dinamiche
- Gestione errori robusta

## 🚀 Comandi Rapidi

```bash
# Avvia bot
npm start

# Aggiorna plugin
node update-plugins.js

# Test sistema lingua
.lingua
.help
.ia ciao
```

## 📞 Supporto

Per supporto tecnico:
- GitHub: [ChatUnity Center](https://github.com/chatunitycenter)
- Comando: `.support`
- Versione: 7.0+

---

**Sviluppato dal Team ChatUnity** 🤖
*Sistema multilingue implementato con successo!*
