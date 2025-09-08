/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                    CHATUNITY BOT - ITALIAN TRANSLATIONS                     ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Enhanced Menu Translations & Multilingual Support               ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  File delle traduzioni italiane per il supporto multilingue completo      ║
 * ║  del bot con tutte le chiavi di traduzione per menu e comandi.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

export default {
  // Sistema generale
  smsAvisoMG: () => "⚠️ Attenzione!",
  smsWait: () => "⏳ Caricamento...",
  smsError: () => "❌ Si è verificato un errore",
  smsSuccess: () => "✅ Operazione completata con successo",
  smsProcessing: () => "🔄 Elaborazione in corso...",
  
  // Comandi generali
  smsOnlyGroup: () => "❌ Questo comando funziona solo nei gruppi!",
  smsOnlyAdmin: () => "❌ Solo gli admin possono usare questo comando!",
  smsOnlyOwner: () => "❌ Solo il proprietario può usare questo comando!",
  smsOnlyPremium: () => "💎 Questo comando è disponibile solo per utenti premium!",
  smsInvalidCommand: () => "❌ Comando non valido",
  smsNoText: () => "❌ Inserisci del testo",
  smsNoMedia: () => "❌ Invia o rispondi a un media",
  
  // AI e ChatGPT
  aiNoQuery: () => "⚠️ *Inserisci una richiesta valida per ChatGPT!*\n\n📌 Esempi:\n{prefix}{command} Raccontami una barzelletta\n{prefix}{command} Suggeriscimi 5 libri fantasy\n{prefix}{command} Codice HTML per una pagina con login",
  aiError: () => "❌ Si è verificato un errore durante la generazione della risposta. Riprova più tardi.",
  aiProcessing: () => "🤖 Sto elaborando la tua richiesta...",
  
  // Sistema benvenuto/addio
  welcomeTitle: () => "✧ BENVENUTO! ✧",
  goodbyeTitle: () => "✧ ADDIO! ✧",
  welcomeDefault: (user, group, members) => `*Benvenuto/a* @${user} 🎉\n┊ *Gruppo:* ${group}\n╰► *Membri:* ${members}`,
  goodbyeDefault: (user, members) => `*Arrivederci* @${user} 👋\n┊ Ha lasciato il gruppo\n╰► *Membri rimasti:* ${members}`,
  
  welcomeSetHelp: () => `🎉 *Imposta messaggio di benvenuto*

*Uso:* {command} <messaggio>

*Variabili disponibili:*
• @user - Tag dell'utente
• $nome - Nome dell'utente  
• $gruppo - Nome del gruppo
• $membri - Numero membri
• $numero - Numero di telefono
• $tag - Tag utente (alias di @user)

*Esempio:*
{command} Ciao @user! 👋 Benvenuto/a in $gruppo! Ora siamo $membri membri! 🎉

*Per ripristinare il messaggio predefinito:*
{command} reset`,
  
  goodbyeSetHelp: () => `👋 *Imposta messaggio di addio*

*Uso:* {command} <messaggio>

*Variabili disponibili:*
• @user - Tag dell'utente
• $nome - Nome dell'utente  
• $gruppo - Nome del gruppo
• $membri - Numero membri
• $numero - Numero di telefono
• $tag - Tag utente (alias di @user)

*Esempio:*
{command} Addio @user! 😢 Ci mancherai in $gruppo. Rimaniamo in $membri membri.

*Per ripristinare il messaggio predefinito:*
{command} reset`,
  
  welcomeReset: () => "✅ Messaggio di benvenuto ripristinato al predefinito!",
  goodbyeReset: () => "✅ Messaggio di addio ripristinato al predefinito!",
  welcomeSet: () => "✅ Messaggio di benvenuto personalizzato impostato!",
  goodbyeSet: () => "✅ Messaggio di addio personalizzato impostato!",
  
  // Sistema lingua
  languageChanged: (params) => `🌍 Lingua cambiata in: ${params?.lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  languageHelp: () => `🌍 *Gestione Lingua*\n\n*Lingue disponibili:*\n• 🇮🇹 Italiano (it)\n• 🇺🇸 English (en)\n\n*Uso:*\n• Nei gruppi (solo admin/owner):\n  {prefix}lingua it  — Imposta la lingua del gruppo su Italiano\n  {prefix}lingua en  — Imposta la lingua del gruppo su Inglese\n• In chat privata: imposta la tua lingua personale\n\n{prefix}lingua — Mostra lingua attuale`,
  currentLanguage: (params) => `🌍 Lingua attuale: ${params?.lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  invalidLanguage: () => "❌ Lingua non valida. Usa 'it' per italiano o 'en' per inglese.",
  
  wordleWin: 'Complimenti! Hai indovinato la parola in {attempts} tentativi! 🎉',
  
  // Sistema admin
  adminOnly: () => "👑 Solo gli amministratori possono usare questo comando!",
  ownerOnly: () => "🔒 Solo il proprietario del bot può usare questo comando!",
  
  // Sistema anti-spam
  antiSpamWarning: () => "⚠️ Non fare spam! Rallenta con i messaggi.",
  antiSpamMuted: () => "🔇 Sei stato silenziato per spam.",
  
  // Sistema file e media
  fileNotFound: () => "📁 File non trovato",
  fileTooLarge: () => "📁 File troppo grande",
  invalidFormat: () => "📁 Formato file non valido",
  
  // Sistema gruppi
  groupInfoUpdated: () => "ℹ️ Informazioni gruppo aggiornate",
  userPromoted: (user) => `👑 @${user} è stato promosso ad amministratore`,
  userDemoted: (user) => `👤 @${user} è stato rimosso dagli amministratori`,
  userKicked: (user) => `🚫 @${user} è stato rimosso dal gruppo`,
  
  // Sistema economia (se presente)
  noCoins: () => "💰 Non hai abbastanza monete!",
  coinsEarned: (amount) => `💰 Hai guadagnato ${amount} monete!`,
  
  // Sistema help
  helpMenu: () => `📋 *Menu Aiuto ChatUnity Bot*\n\n🤖 *Comandi AI:*\n• {prefix}ia <testo> - ChatGPT\n• {prefix}img <testo> - Genera immagini\n\n👥 *Comandi Gruppo:*\n• {prefix}benvenuto - Gestisci messaggi benvenuto\n• {prefix}antilink - Attiva/disattiva antilink\n\n🌍 *Lingua:*\n• {prefix}lingua <it/en> - Cambia lingua\n\n📞 *Supporto:*\n• {prefix}support - Contatta il supporto`,
  
  // Menu system
  mainMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳𝑬',
  adminMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵',
  adminCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵',
  chooseMenu: () => 'Scegli un menu:',
  mainMenuButton: () => '🏠 Menu Principale',
  ownerMenuButton: () => '👑 Menu Owner',
  securityMenuButton: () => '🚨 Menu Sicurezza',
  groupMenuButton: () => '👥 Menu Gruppo',
  aiMenuButton: () => '🤖 Menu IA',
  promoteCommand: () => 'promuovi /mettiadmin',
  demoteCommand: () => 'retrocedi /togliadmin',
  warnCommands: () => 'warn / unwarn',
  muteCommands: () => 'muta / smuta',
  setDescCommand: () => 'setdescrizione',
  setScheduleCommand: () => 'setorario',
  setNameCommand: () => 'setnome',
  hidetagCommand: () => 'hidetag',
  kickCommand: () => 'kick / cacca',
  adminsCommand: () => 'admins',
  tagallCommand: () => 'tagall',
  openCloseCommand: () => 'aperto / chiuso',
  setWelcomeCommand: () => 'setwelcome',
  setByeCommand: () => 'setbye',
  inactiveCommand: () => 'inattivi',
  listNumCommand: () => 'listanum + prefisso',
  cleanupCommand: () => 'pulizia + prefisso',
  clearPlayCommand: () => 'clearplay',
  rulesCommand: () => 'regole/setregole',
  quarantineCommand: () => 'quarantena',
  dsCommand: () => 'ds',
  listWarnCommand: () => 'listawarn',
  linkCommand: () => 'link',
  linkQrCommand: () => 'linkqr',
  poweredBy: () => 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ',
  
  // Menu gruppo
  groupMenuTitle: () => '𝑴𝑬𝑵𝑼 𝐆𝐑𝐔𝐏𝐏𝐎',
  memberCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑷𝑬𝑹 𝑰 𝑴𝑬𝑴𝑩𝑹𝑰',
  musicAudioSection: () => 'MUSICA & AUDIO',
  infoUtilitySection: () => 'INFORMAZIONI & UTILITÀ',
  imageEditSection: () => 'IMMAGINI & MODIFICA',
  pokemonSection: () => 'POKEMON',
  gangSystemSection: () => 'GANG SYSTEM',
  gamesCasinoSection: () => 'GIOCHI & CASINÒ',
  economyRankingSection: () => 'ECONOMIA & CLASSIFICHE',
  socialInteractionSection: () => 'INTERAZIONI SOCIALI',
  howMuchSection: () => 'QUANTO È?',
  personalityTestSection: () => 'TEST PERSONALITÀ',
  songCommand: () => 'canzone',
  audioCommand: () => 'audio',
  videoCommand: () => 'video',
  artistTitleCommand: () => 'artista-titolo',
  cityCommand: () => 'città',
  textCommand: () => 'testo',
  groupCommand: () => 'gruppo',
  repoCommand: () => 'repo',
  userCommand: () => 'utente',
  topicCommand: () => 'argomento',
  checkSiteCommand: () => 'check sito',
  photoToStickerCommand: () => 'foto a sticker',
  stickerToPhotoCommand: () => 'sticker a foto',
  improveQualityCommand: () => 'migliora qualità foto',
  photoCommand: () => 'foto',
  hiddenPhotoCommand: () => 'foto nascosta',
  memeCommand: () => 'meme',
  fromStickerCommand: () => 'da sticker',
  blurImageCommand: () => 'sfoca immagine',
  comingSoonCommand: () => 'in arrivo',
  quantityCommand: () => 'quantità',
  headsOrTailsCommand: () => 'testa o croce',
  mathProblemCommand: () => 'problema mate',
  rockPaperScissorsCommand: () => 'sasso carta forbici',
  pokemonInfoCommand: () => 'info Pokémon',
  balanceCommand: () => 'saldo',
  topUsersCommand: () => 'top utenti',
  buyUCCommand: () => 'acquista UC',
  withdrawUCCommand: () => 'UC dalla banca',
  earnXPCommand: () => 'guadagna XP',
  proposalCommand: () => 'proposta',
  endRelationshipCommand: () => 'fine relazione',
  affinityCommand: () => 'affinità',
  charmCommand: () => 'fascino',
  createFightCommand: () => 'crea litigi',
  truthOrDareCommand: () => 'obb o v',
  versionLabel: () => '𝑵𝑬𝑹𝑺𝑰𝑶𝑵𝑬',
  collabLabel: () => '𝐂𝐎𝐋𝐋𝐀𝐁: 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄',
  supportLabel: () => '𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎',
  
  // Menu owner
  ownerMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹',
  ownerReservedCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑹𝑰𝑺𝑬𝑹𝑽𝑨𝑻𝑰 𝑨𝑳𝑳\'𝑶𝑾𝑵𝑬𝑹',
  setNameCommand: () => 'impostanome',
  resetNameCommand: () => 'resetnome',
  manageCommand: () => 'gestisci',
  setGroupsCommand: () => 'setgruppi',
  addGroupsCommand: () => 'aggiungigruppi',
  resetGroupsCommand: () => 'resetgruppi',
  setPpCommand: () => 'setpp',
  banUserCommand: () => 'banuser',
  unbanUserCommand: () => 'unbanuser',
  blockUserCommand: () => 'blockuser',
  unblockUserCommand: () => 'unblockuser',
  getFileCommand: () => 'getfile',
  saveCommand: () => 'salva',
  dpCommand: () => 'dp',
  getPluginCommand: () => 'getplugin',
  joinCommand: () => 'join',
  outCommand: () => 'out',
  prefixCommand: () => 'prefisso',
  resetPrefixCommand: () => 'resetprefisso',
  godModeCommand: () => 'godmode',
  resetCommand: () => 'azzera',
  addCommand: () => 'aggiungi',
  removeCommand: () => 'rimuovi',
  everyGroupCommand: () => 'everygroup',
  banChatCommand: () => 'banchat',
  unbanChatCommand: () => 'unbanchat',
  restartCommand: () => 'riavvia',
  shutdownBotCommand: () => 'spegnibot',
  updateBotCommand: () => 'aggiornabot',
  imageParam: () => 'immagine',
  pluginParam: () => 'plugin',
  linkParam: () => 'link',
  autoAdminParam: () => 'autoadmin',
  numMessagesParam: () => 'num. messaggi',
  commandParam: () => 'comando',
  groupParam: () => 'gruppo',
  
  // Menu AI
  aiMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻',
  generalCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑮𝑬𝑵𝑬𝑹𝑨𝑳𝑰',
  iaCommand: () => 'ia',
  alyaCommand: () => 'Alya',
  geminiCommand: () => 'gemini',
  chatgptCommand: () => 'chatgpt',
  deepseekCommand: () => 'deepseek',
  voiceCommand: () => 'vocale',
  imageCommand: () => 'immagine',
  image2Command: () => 'immagine2',
  image3Command: () => 'immagine3',
  animalInfoCommand: () => 'infoanimale',
  kcalCommand: () => 'kcal',
  summaryCommand: () => 'riassunto',
  recipeCommand: () => 'ricetta',
  
  // Menu Sicurezza
  securityMenuTitle: () => '𝑴𝑬𝑵𝑼 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐈',
  activateDisable: () => '𝐀𝐓𝐓𝐈𝐕𝐀/𝐃𝐈𝐒𝐀𝐁𝐈𝐋𝐈𝐓𝐀',
  howToUse: () => '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀',
  activateFunction: () => 'attiva [funzione]',
  disableFunction: () => 'disabilita [funzione]',
  
  // AI DeepSeek
  deepseekNoText: () => '*Inserisci un testo per parlare con DeepSeek AI.*',
  deepseekNoResponse: () => '❌ Non è stata ottenuta una risposta valida da DeepSeek AI.',
  deepseekError: () => '*❌ Errore durante l\'elaborazione della richiesta.*',
  
  // AI Gemini
  geminiNoText: () => 'Che vuoi?',
  geminiNoResponse: () => 'Non ho ricevuto una risposta valida dall\'API. Riprova più tardi.',
  geminiError: () => 'Si è verificato un errore. Per favore, riprova più tardi.',
  geminiConsoleError: () => 'Errore nel comando',
  
  // AI Riassunto
  summaryUsage: () => '❗ Usa il comando così:\n<comando> <testo lungo>\nOppure rispondi a un messaggio lungo con il comando',
  summaryTooLong: () => '❌ Il testo è troppo lungo. Limite massimo: 2500 caratteri.',
  summaryEmptyResponse: () => 'Risposta vuota dall\'API.',
  summaryTitle: () => 'Riassunto',
  summaryConsoleError: () => '[❌ riassunto plugin errore]',
  summaryError: () => '⚠️ Errore durante la generazione del riassunto. Riprova più tardi.',
  
  // AI Shazam
  shazamFileTooLarge: () => '╯⊱⚠️⊱ *ATTENZIONE | WARNING* ⊱⚠️⊱╮\n\nIl file che hai caricato è troppo grande, ti consigliamo di tagliare il file in un frammento più piccolo. 10-20 secondi di audio sono sufficienti per l\'identificazione',
  shazamSearchResult: () => 'RISULTATO DELLA RICERCA',
  shazamTitle: () => 'TITOLO',
  shazamArtist: () => 'ARTISTA',
  shazamAlbum: () => 'ALBUM',
  shazamGenre: () => 'GENERE',
  shazamReleaseDate: () => 'DATA DI PUBBLICAZIONE',
  shazamNotFound: () => 'Non trovato',
  shazamWrongUsage: () => '╯⊱❗️⊱ *USO ERRATO* ⊱❗️⊱╮\n\nRISPONDI A UN AUDIO O VIDEO',
  
  // AI Support
  supportGreeting: () => 'Ciao! sono l\'assistente IA di chatunity-bot come posso aiutarti oggi?',
  supportNoResponse: () => 'Non ho ricevuto una risposta valida dall\'API. Riprova più tardi.',
  supportError: () => 'Si è verificato un errore. Per favore, riprova più tardi.',
  supportConsoleError: () => 'Errore nel comando',
  
  // AI Voice
  voiceFFmpegError: () => 'ffmpeg non trovato o errore nell\'elaborazione audio. Assicurati che ffmpeg sia installato e accessibile nel PATH.',
  voiceDefaultResponse: () => 'Cazzo vuoi',
  voiceNoUnderstand: () => 'Non ho capito, puoi ripetere?',
  voiceInvalidFile: () => 'Errore: file audio non valido.',
  voiceError: () => 'Errore sconosciuto. Riprova più tardi.',
  voiceConsoleError: () => 'Errore nel comando',
  
  // Admin Delete Session
  adminDeleteSessionDirectUse: () => '*🚨 𝐔𝐭𝐢𝐥𝐢𝐳𝐳𝐢 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐫𝐞𝐭𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐧𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭.*',
  adminDeleteSessionEmpty: () => '*❌ 𝐋𝐚 𝐜𝐚𝐫𝐭𝐞𝐥𝐥𝐚 𝐝𝐞𝐥𝐥𝐞 𝐬𝐞𝐬𝐬𝐢𝐨𝐧𝐢 𝐞̀ 𝐯𝐮𝐨𝐭𝐚 o 𝐧𝐨𝐧 𝐞𝐬𝐢𝐬𝐭𝐞.*',
  adminDeleteSessionAlreadyEmpty: () => '❗ 𝐋𝐞 𝐬𝐞𝐬𝐬𝐢𝐨𝐧𝐢 𝐬𝐨𝐧𝐨 𝐯𝐮𝐨𝐭𝐞, 𝐫𝐢𝐩𝐫𝐨𝐯𝐚 𝐭𝐫𝐚 𝐩𝐨𝐜𝐨 𝐧𝐞 𝐡𝐨 𝐛𝐢𝐬𝐨𝐠𝐧𝐨 ‼️',
  adminDeleteSessionSuccess: () => '🔥 𝐒𝐨𝐧𝐨 𝐬𝐭𝐚𝐭𝐢 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐭𝐢 ${count} 𝐚𝐫𝐜𝐡𝐢𝐯𝐢 𝐝𝐞𝐥𝐥𝐞 𝐬𝐞𝐬𝐬𝐢𝐨𝐧𝐢! 𝐆𝐫𝐚𝐳𝐢𝐞 𝐩𝐞𝐫 𝐚𝐯𝐞𝐫𝐦𝐢 𝐬𝐯𝐮𝐨𝐭𝐚𝐭𝐨😼',
  adminDeleteSessionError: () => '❌ 𝐄𝐫𝐫𝐨𝐫𝐞 𝐝𝐢 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐳𝐢𝐨𝐧𝐞!',
  
  // Admin Link QR
  adminLinkQRSuccess: () => 'Ecco il QR Code per il link del gruppo!',
  adminLinkQRError: () => 'Errore durante la generazione del QR Code:',
  
  menuFooter: () => 'Scegli un menu:',
  menuAdmin: () => '🛡️ Menu Admin',
  menuOwner: () => '👑 Menu Owner',
  menuSecurity: () => '🚨 Menu Sicurezza',
  menuGroup: () => '👥 Menu Gruppo',
  menuAI: () => '🤖 Menu IA',
  
  // Menu commands
  staffCommand: () => 'staff',
  hegemoniaCommand: () => 'egemonia',
  candidatesCommand: () => 'candidati',
  installCommand: () => 'installa',
  guideCommand: () => 'guida',
  channelsCommand: () => 'canali',
  systemCommand: () => 'sistema',
  faqCommand: () => 'FAQ',
  pingCommand: () => 'ping',
  reportCommand: () => 'segnala',
  suggestCommand: () => 'consiglia',
  newsCommand: () => 'novità',
  
  // Menu labels
  versionLabel: () => '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬',
  collabLabel: () => '𝐂𝐎𝐋𝐋𝐀𝐁: 𝐎𝐍𝐄 𝐏𝐈𝐄𝐂𝐄',
  usersLabel: () => '𝐔𝐓𝐄𝐍𝐓𝐈',
  
  // Event system
  eventName: () => 'Evento ChatUnity',
  eventDescription: () => 'Partecipa al nostro evento!',
  eventLocationName: () => 'Sede evento',
  
  // AI Image generation
  aiImgHelp: () => 'Per favore, scrivi una descrizione per generare l\'immagine.',
  aiImgProcessing: () => '> CREO IMMAGINE ...🔥',
  aiImgError: () => '❌ Errore durante la generazione dell\'immagine.',
  aiImgSuccess: () => '✅ Immagine generata con successo!',
  
  // Admin requests
  smsBotNotAdmin: () => 'Devo essere admin per eseguire questa azione.',
  noRequestsToAccept: () => 'Non ci sono richieste da accettare.',
  requestsAccepted: (count) => `✅ Accettate ${count} richieste con successo.`,
  acceptRequestsError: () => 'Errore durante l\'accettazione delle richieste.',
  
  // Messaggi di sistema
  botStarted: () => "🤖 ChatUnity Bot avviato correttamente!",
  botStopped: () => "🤖 ChatUnity Bot arrestato",
  connectionLost: () => "📡 Connessione persa, riconnessione in corso...",
  connectionRestored: () => "📡 Connessione ripristinata!",
  
  // Errori comuni
  networkError: () => "🌐 Errore di rete, riprova più tardi",
  serverError: () => "🔧 Errore del server, riprova più tardi",
  unknownError: () => "❓ Errore sconosciuto",
  
  // Messaggi di conferma
  confirmAction: () => "❓ Sei sicuro di voler continuare? Rispondi con 'si' o 'no'",
  actionCancelled: () => "❌ Azione annullata",
  actionConfirmed: () => "✅ Azione confermata",
  
  // Sistema download
  downloadStarted: () => "⬇️ Download iniziato...",
  downloadCompleted: () => "✅ Download completato!",
  downloadFailed: () => "❌ Download fallito",
  
  // Sistema sticker
  stickerCreated: () => "🎨 Sticker creato con successo!",
  
  // Sistema pin messaggi
  pinReplyToMessage: () => "⚠️ Rispondi a un messaggio per fissarlo.",
  pin1Day: () => "⏳ 1 Giorno",
  pin7Days: () => "⏳ 7 Giorni",
  pin30Days: () => "⏳ 30 Giorni",
  pinChooseDuration: () => "Scegli per quanto tempo vuoi fissare il messaggio:",
  pinNoMessageQueued: () => "❌ Nessun messaggio da fissare. Usa prima il comando pin rispondendo a un messaggio.",
  pinError: () => "❌ Errore nel fissare il messaggio.",
  unpinReplyToMessage: (params) => `⚠️ Rispondi a un messaggio per ${params?.action || 'eseguire l\'azione'}.`,
  unpinAction: () => "rimuoverlo dai fissati",
  executeAction: () => "eseguire l'azione",
  commandError: () => "❌ Errore nell'eseguire il comando.",
  
  // Sistema foto profilo
  profilePicBotError: () => "🚫 Impossibile ottenere la foto profilo del bot.",
  profilePicCaption: () => "📸",
  profilePicNotFound: (params) => `@${params?.user || 'utente'} 𝐧𝐨𝐧 𝐡𝐚 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨 𝐩𝐫𝐨𝐟𝐢𝐥𝐨 🚫`,
  
  // Sistema accettazione automatica numeri italiani
  adminOnlyCommand: () => "*Solo gli admin possono usare questo comando*",
  botAdminRequired: () => "*Il bot deve essere admin per usare questa funzione*",
  italianNumbersDisabled: () => "*❌ Accettazione automatica numeri italiani disattivata*",
  italianNumbersEnabled: () => "*✅ Accettazione automatica numeri italiani attivata*\n\nI numeri italiani (39) verranno accettati automaticamente, gli altri rifiutati",
  
  // Sistema rifiuto richieste
  groupOnlyCommand: () => "Questo comando si usa solo nei gruppi.",
  botAdminRequiredReject: () => "Devo essere admin per rifiutare le richieste.",
  noRequestsToReject: () => "Non ci sono richieste da rifiutare.",
  noRequestsWithPrefix: (params) => `Nessuna richiesta con prefisso +${params?.prefix || ''}.`,
  noRequestsRejected: () => "Nessuna richiesta rifiutata.",
  requestsRejectedSuccess: (params) => `❌ Rifiutate ${params?.count || 0} richieste con successo${params?.prefix ? ` con prefisso +${params.prefix}` : ""}.`,
  rejectRequestsError: () => "Errore durante il rifiuto delle richieste.",
  
  // Sistema selezione sport
  sportFootball: () => "⚽ Calcio",
  sportBasket: () => "🏀 Basket",
  sportTennis: () => "🎾 Tennis",
  sportFormula1: () => "🏎️ Formula 1",
  sportMMA: () => "🥊 MMA",
  sportCycling: () => "🚴‍♂️ Ciclismo",
  chooseSportMessage: () => "📌 *Scegli lo sport che vuoi seguire per ricevere le notizie personalizzate:*",
  chooseSportFooter: () => "💡 Puoi cambiarlo in qualsiasi momento",
  
  // Sistema tag nascosto
  tagBy: () => "Tag by",
  tagError: () => "Errore .tag:",
  
  // Sistema file owner
  fileNameRequired: () => "⚠️ Devi specificare il nome del file da creare. Es: `.file nome.txt`",
  fileAlreadyExists: (params) => `⚠️ Il file "${params?.fileName || 'file'}" esiste già.`,
  fileCreationError: (params) => `❌ Errore nella creazione del file: ${params?.error || 'errore sconosciuto'}`,
  fileCreatedSuccess: (params) => `✅ Il file "${params?.fileName || 'file'}" è stato creato con successo nella cartella del bot.`,
  
  // Sistema AI Alya
  alyaWhatDoYouWant: () => "Che vuoi?",
  alyaNoValidResponse: () => "Non ho ricevuto una risposta valida dall'API. Riprova più tardi.",
  alyaError: (params) => `Si è verificato un errore. Per favore, riprova più tardi.\n\n#report ${params?.command || 'comando'}\n\n${wm}`,
  
  // Sistema lista gruppi
  groupListTitle: (params) => `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄𝐈 𝐆𝐑𝐔𝐏𝐏𝐈 𝐃𝐈 ${params?.botName || 'Bot'}`,
  totalGroups: () => "𝐓𝐨𝐭𝐚𝐥𝐞 𝐆𝐫𝐮𝐩𝐩𝐢",
  nameNotAvailable: () => "Nome non disponibile",
  notAdmin: () => "Non sono admin",
  error: () => "Errore",
  
  // Sistema join gruppo
  invalidLink: () => "Link non valido!",
  joiningGroup: () => "😎 Attendi 3 secondi, sto entrando nel gruppo",
  groupJoinGreeting: (params) => `Ciao amici di ${params?.groupName || 'gruppo'}\n\nI miei comandi sono visualizzabili in ${params?.prefix || '.'}menu`,
  botAlreadyInGroup: () => "Il bot è già nel gruppo",
  
  // Sistema script on/off
  scriptNameRequired: () => "Scrivi il nome dello script, esempio: .offscript info",
  fileNotFound: () => "File non trovato.",
  scriptAlreadyOff: () => "Script è già spento.",
  scriptTurnedOff: (params) => `Script ${params?.file || 'file'} spento.`,
  scriptTurnedOn: (params) => `Script ${params?.file || 'file'} riattivato.`,
  
  // Sistema server/comando
  serverCommandRequired: () => "⚠️ Devi specificare il comando da eseguire. Es: `.server ls -la`",
  executingCommand: (params) => `🔄 Eseguendo comando: "${params?.cmd || 'comando'}"`,
  executionError: (params) => `❌ Errore durante l'esecuzione: ${params?.error || 'errore sconosciuto'}`,
  output: () => "Output",
  errorsWarnings: () => "Errori/Avvisi",
  commandExecutedNoOutput: () => "✅ Comando eseguito senza output",
  outputTruncated: () => "... (output troncato)",
  
  // Sistema zip/backup
  zipUsage: (params) => `⚠️ Usa: ${params?.command || 'comando'} <nome_archivio>`,
  creatingBackup: () => "🔄 Creazione del backup in corso...",
  backupCreatedSending: (params) => `✅ Backup ${params?.archiveName || 'archivio'}.zip creato. Inviando...`,
  compressionError: (params) => `❌ Errore durante la compressione: ${params?.error || 'errore sconosciuto'}`,
  
  // Sistema antispam
  spamDetectedModifying: () => "Spam rilevato! Modificando le impostazioni del gruppo...",
  onlyAdminsCanSend: () => "Solo gli amministratori possono inviare messaggi.",
  userNotFoundOrRemoved: () => "Utente non trovato o già rimosso.",
  userIsAdminNotRemoved: () => "L'utente è un amministratore e non verrà rimosso.",
  allSpamMessagesDeleted: () => "Tutti i messaggi di spam sono stati eliminati.",
  chatReactivatedForAll: () => "Chat riattivata per tutti i membri.",
  antispamDetected: () => "*antispam by Origin detected*",
  antispamNotificationSent: () => "Messaggio di notifica antispam inviato.",
  spamCounterReset: () => "Contatore di spam per l'utente resettato.",
  spamHandlingError: () => "Errore durante la gestione dello spam:",
  botNotAdminOrRestrictionDisabled: () => "Bot non è amministratore o la restrizione è disattivata. Non posso eseguire l'operazione.",
  spamCounterResetTimeout: () => "Contatore di spam per l'utente resettato dopo il timeout.",
  timeoutExpiredReset: () => "Timeout scaduto. Reset del contatore di spam per l'utente.",
  stickerFailed: () => "❌ Impossibile creare lo sticker",
  
  // Sistema musica
  musicNotFound: () => "🎵 Musica non trovata",
  musicDownloading: () => "🎵 Download musica in corso...",
  musicReady: () => "🎵 Musica pronta!",

  // Messaggi gruppo: apertura/chiusura e clearplay
  groupOpenSuccess: () => "𝐂𝐡𝐚𝐭 𝐚𝐩𝐞𝐫𝐭𝐚 𝐩𝐞𝐫 𝐭𝐮𝐭𝐭𝐢",
  groupCloseSuccess: () => "𝐂𝐡𝐚𝐭 𝐩𝐞𝐫 𝐬𝐨𝐥𝐢 𝐚𝐝𝐦𝐢𝐧",
  groupSettingsError: () => "❌ Non posso modificare le impostazioni: assicurati che io sia admin!",
  clearplayOnlyAdmins: () => "❌ Solo gli admin possono usare questo comando!",
  clearplayAlreadyEmpty: () => "✅ La cartella è già vuota!",
  clearplayNoFiles: () => "✅ Nessun file da eliminare!",
  clearplaySuccess: () => "🗑️ Cartella Play svuotata con successo!",

  // Bibbia / Corano
  bibleFetchError: () => "⚠️ Errore nel recupero del versetto. Usa un riferimento valido tipo Giovanni 3:16",
  quranFetchError: () => "⚠️ Errore nel recupero del versetto. Usa un riferimento valido tipo 2:255",

  // Set descrizione gruppo
  setDescInvalid: () => "Per favore, inserisci una descrizione valida.",
  setDescSuccess: () => "✅ Descrizione del gruppo aggiornata con successo!",
  setDescError: () => "❌ Si è verificato un errore durante l'aggiornamento della descrizione.",

  // Kick
  botMustBeAdmin: () => "ⓘ Devo essere admin per poter funzionare",
  mentionToRemove: () => "ⓘ Menziona la persona da rimuovere",
  cannotRemoveOwnerBot: () => "ⓘ Non puoi rimuovere il creatore del bot",
  cannotRemoveBot: () => "ⓘ Non puoi rimuovere il bot",
  cannotRemoveSelf: () => "ⓘ Non puoi rimuovere te stesso",
  targetIsGroupOwner: () => "ⓘ L'utente che hai provato a rimuovere è il creatore del gruppo",
  targetIsAdmin: () => "ⓘ L'utente che hai provato a rimuovere è admin",
  kickRemoved: (p) => `@${p?.target} è stato rimosso da @${p?.by}${p?.reason ? `\n\nMotivo: ${p?.reason}` : ''}`,

  // Minecraft link
  minecraftMainText: () => "🎮 GIOCO MINECRAFT GRATIS E SICURO! 🎮\n\nScopri Eaglercraft, la versione browser di Minecraft che puoi giocare OVUNQUE!\n\n🔗 Link diretto: https://eaglercraft.com/\n✅ Gratuito al 100%\n🔒 Sicuro e senza download\n🌐 Gioca direttamente dal browser\n\nApri il link sopra per giocare!",
  minecraftFooter: () => "© ChatUnity - Divertiti!",
  minecraftCaption: () => "Ecco come appare Eaglercraft! 👆",
  minecraftError: () => "❌ Errore nel mostrare il link. Riprova più tardi.",

  // Quarantena
  quarantineOnlyOwners: () => "❌ Comando riservato esclusivamente agli owner del bot!",
  quarantineBotAdminRequired: () => "❌ Il bot deve essere amministratore per eseguire questo comando!",
  quarantineAllAdminsAuthorized: () => "⚠ Tutti gli amministratori attuali sono autorizzati (bot, owner e founder).",
  quarantineChatLocked: () => "🔒 Chat bloccata: ora solo gli admin possono inviare messaggi.",
  quarantineStarting: () => "⚠ Avvio procedura di quarantena...",
  quarantineCompleted: (p) => `✅ Quarantena completata!\n\n👑 Founder: @${p?.owner}\n🤖 Bot: @${p?.bot}\n🛡️ Admin autorizzati: ${p?.count}`,

  // Lista amici
  friendsListTitle: (p) => `📜 Lista Amici di ${p?.name}`,
  friendsLastFriend: (p) => `👤 Ultimo Amico: ${p?.last}`,
  friendsCompleteList: () => "👥 Lista Completa:",
  friendsNone: () => "Nessuno",
  friendsLoneWolf: () => "│   Nessuno complimenti lupo solitario",
  friendsError: () => "❌ Si è verificato un errore durante l'esecuzione del comando.",

  // Messaggi programmati apertura/chiusura gruppo
  scheduledGroupOpened: () => "✅ Il gruppo è ora aperto. Tutti possono scrivere.",
  scheduledGroupClosed: () => "🔒 Il gruppo è ora chiuso. Solo gli amministratori possono scrivere.",

  // Comando setorario
  setorarioGroupOnly: () => "❌ Questo comando può essere usato solo nei gruppi.",
  setorarioHelp: () => "❓ Comandi disponibili:\n\n• #setorario set <orario apertura> <orario chiusura> - Imposta gli orari\n• #setorario disable - Disattiva gli orari automatici\n• #setorario status - Mostra gli orari attuali\n\nEsempio: #setorario set 08:00 22:00",
  setorarioUseCorrect: () => "❌ Usa il comando correttamente:\n\n#setorario set <orario_apertura> <orario_chiusura>\nEsempio: #setorario set 08:00 22:00",
  setorarioInvalidFormat: () => "❌ Gli orari devono essere nel formato HH:MM (esempio: 08:00).",
  setorarioSetSuccess: (p) => `✅ Orari impostati con successo:\n- Apertura: ${p?.open}\n- Chiusura: ${p?.close}\n\nIl gruppo si aprirà e chiuderà automaticamente ogni giorno.`,
  setorarioNoConfig: () => "❌ Non ci sono orari configurati per questo gruppo.",
  setorarioDisabled: () => "✅ Gli orari automatici sono stati disattivati per questo gruppo.",
  setorarioConfiguredStatus: (p) => `📅 Orari configurati per questo gruppo:\n- Apertura: ${p?.open}\n- Chiusura: ${p?.close}\n- Stato: ${p?.status}\n\nPer modificare: #setorario set <orario_apertura> <orario_chiusura>`,
  setorarioUnknownCommand: () => "❓ Comando non riconosciuto. Usa i comandi in #setorario help.",

  // Regole gruppo
  groupRulesSetSuccess: () => "ⓘ Regole del gruppo impostate con successo",
  groupRulesNotSet: () => "ⓘ Nessuna regola del gruppo impostata",

  // Warn
  warnNeedTarget: () => "❌ Devi menzionare un utente o rispondere a un suo messaggio.",
  warnCantWarnBot: () => "🚫 Non puoi warnare il bot.",
  warnUserNotFound: () => "❌ Utente non trovato nel database.",
  warnProgress: (p) => `⚠️ AVVERTIMENTO ${p?.count}/3 (3 warn = ban)`,
  warnRemovedAfter3: () => "⛔ UTENTE RIMOSSO DOPO 3 AVVERTIMENTI",

  // Proposta comando (consiglia)
  proposeProvideCommand: () => "⚠️ Inserisci il comando che vuoi proporre. Es: .consiglia <comando> <spiegazione>",
  proposeDescribeBetter: () => "⚠️ Descrivi meglio il comando (minimo 10 caratteri).",
  proposeMaxLength: () => "⚠️ Lunghezza massima consentita: 1000 caratteri.",
  proposeConfirmSent: () => "✅ La tua proposta è stata inviata allo sviluppatore.\n_⚠ Comandi illeciti possono comportare restrizioni._",

  // Ricette (gp-ricette)
  recipeUsage: (p) => `🍽️ Usa così:\n${p?.prefix}${p?.command} <ingrediente/i>\nEsempio: ${p?.prefix}${p?.command} zucchine, patate`,
  recipeError: () => "⚠️ Errore nel generare la ricetta. Riprova tra poco!",

  // Segnalazione (gp-segnala)
  reportProvideCommand: () => "⚠ Inserisci il comando che vuoi segnalare.",
  reportDescribeBetter: () => "⚠️ Descrivi meglio il problema (minimo 10 caratteri).",
  reportMaxLength: () => "⚠️ Lunghezza massima consentita: 1000 caratteri.",
  reportConfirmSent: () => "✅ La tua segnalazione è stata inviata allo sviluppatore.\n_⚠ Segnalazioni false possono comportare restrizioni._",

  // Gioco bandiere (gp-bandiera)
  flagNoActiveGame: () => "⚠️ Non c'è nessuna partita attiva in questo gruppo!",
  flagGameInterrupted: (p) => `🛑 Gioco delle bandiere interrotto dall'admin\n✨ La risposta era: ${p?.answer ? `*${p.answer}*` : ''}`,
  flagCooldown: (p) => `⏳ Aspetta ancora ${p?.seconds || 0} secondi prima di avviare un nuovo gioco!`,
  flagTimeExpired: (p) => `⏳ Tempo scaduto!\n\n🌍 La risposta era: *${p?.answer || ''}*`,
  flagAlmostThere: () => "👀 Ci sei quasi!",
  flagAttemptsExhausted: () => "❌ Hai esaurito i tuoi 3 tentativi!\n\n⏳ Aspetta che altri giocatori provino o che finisca il tempo",
  flagWrongAnswerTryAgain: () => "❌ Risposta errata!\n\n📝 Tentativi rimasti:\n🤔 Pensa bene alla tua prossima risposta!",
  flagWrongAnswerLastTry: () => "❌ Risposta errata!\n\n📝 Ultimo tentativo rimasto..",

  // Uso comando Muta
  muteUsage: (p) => `ㅤㅤ⋆｡˚『 ╭ \`USO COMANDO\` ╯ 』˚｡⋆\n╭\n│ 『 ❌』 \`formato:\` ${p?.prefix || '.'}muta @user [minuti] [motivo]\n│ 『 💡 』 \`oppure:\` rispondi a un messaggio\n╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─`
,
  // Ping caption
  pingCaption: (p) => `╭━〔🚀𝑺𝑻𝑨𝑻𝑶 𝑺𝑰𝑺𝑻𝑬𝑴𝑨🚀〕━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ⌛ *Uptime*: ${p?.uptime || '-'}\n┃◈┃• ⚡ *Ping*: ${p?.latency || '-'} ms\n┃◈┃\n┃◈┃• 💻 *CPU*: ${p?.cpuModel || '-'}\n┃◈┃• 🔋 *Uso*: ${p?.cpuSpeed || '-'} MHz \n┃◈┃\n┃◈┃• 💾 *RAM*: ${p?.ramUsed || '-'} / ${p?.ramTotal || '-'}\n┃◈┃• 🟢 *Libera*: ${p?.ramFree || '-'}\n╰━━━━━━━━━━━━━┈·๏\n`
,
  alreadyMuted: () => "ⓘ Questo utente è già mutato 🔇",
  alreadyUnmuted: () => "ⓘ Questo utente non è mutato",
  userMuted: (p) => `🔇 L'utente @${p?.user || 'utente'} è stato mutato da @${p?.muter || 'admin'}\n\n${p?.reason ? `Motivo: ${p.reason}` : 'Nessun motivo specificato'}`,
  userUnmuted: (p) => `✅ L'utente @${p?.user || 'utente'} è stato smutato da @${p?.muter || 'admin'}`,
  noReason: () => "Nessun motivo specificato",
  // listpl.js
  noJsPluginsFound: () => "📂 Nessun plugin JavaScript trovato",
  noPluginsFoundFor: (p) => `🔍 Nessun plugin trovato per: ${p?.searchTerm || 'termine di ricerca'}`,
  availablePlugins: (p) => `📂 ${p?.bold('Plugin disponibili')} (${p?.count || 0})\n\n`,
  useListplDForDetails: (p) => `💡 Usa ${p?.bold('.listpl d')} per dettagli`,
  useListplSearch: (p) => `🔍 Usa ${p?.bold('.listpl <nome>')} per cercare`,
  // gp-link.js
  groupLinkTitle: () => "Eccoti il link del gruppo:",
  groupLinkFooter: () => "Scegli una delle seguenti opzioni:",
  // gp-setnome.js
  groupNameMissing: () => "⚠️ Per favore inserisci il nuovo nome per il gruppo",
  groupNameUpdated: () => "✅ Nome del gruppo modificato con successo!",
  groupNameUpdateError: () => "❌ Errore durante l'aggiornamento del nome del gruppo",
  // gp-promuovi.js
  promoteNoTarget: () => "⚠️ Menziona l'utente da promuovere",
  promoteInvalidNumber: () => "❌ Numero non valido",
  promoteAlreadyAdmin: (p) => `@${p?.user || 'utente'} è già un amministratore`,
  promoteSuccess: (p) => `✅ @${p?.user || 'utente'} è stato promosso ad amministratore`,
  promoteError: () => "❌ Errore durante la promozione dell'utente",
  // gp-retrocedi.js
  demoteNoTarget: () => "⚠️ Menziona l'utente da retrocedere",
  demoteInvalidNumber: () => "❌ Numero non valido",
  demoteNotAdmin: (p) => `@${p?.user || 'utente'} non è un amministratore`,
  demoteSuccess: (p) => `✅ @${p?.user || 'utente'} è stato retrocesso`,
  demoteError: () => "❌ Errore durante la retrocessione dell'utente",
  // Menu plugins
  mainMenuTitle: () => "MENU PRINCIPALE",
  adminMenuTitle: () => "MENU ADMIN",
  ownerMenuTitle: () => "MENU OWNER",
  securityMenuTitle: () => "MENU SICUREZZA",
  groupMenuTitle: () => "MENU GRUPPO",
  aiMenuTitle: () => "MENU IA",
  adminCommands: () => "COMANDI ADMIN",
  ownerReservedCommands: () => "COMANDI RISERVATI ALL’OWNER",
  memberCommands: () => "COMANDI PER I MEMBRI",
  musicAudioSection: () => "MUSICA & AUDIO",
  infoUtilitySection: () => "INFORMAZIONI & UTILITÀ",
  imageEditSection: () => "IMMAGINI & MODIFICA",
  pokemonSection: () => "POKEMON",
  gangSystemSection: () => "GANG SYSTEM",
  gamesCasinoSection: () => "GIOCHI & CASINÒ",
  economyRankingSection: () => "ECONOMIA & CLASSIFICHE",
  socialInteractionSection: () => "INTERAZIONI SOCIALI",
  howMuchSection: () => "QUANTO È?",
  personalityTestSection: () => "TEST PERSONALITÀ",
  activateDisable: () => "ATTIVA/DISATTIVA",
  howToUse: () => "COME SI USA",
  activateFunction: () => "attiva [funzione]",
  disableFunction: () => "disabilita [funzione]",
  generalCommands: () => "COMANDI GENERALI",
  chooseMenu: () => "Scegli un menu:",
  mainMenuButton: () => "🏠 Menu Principale",
  adminMenuButton: () => "🛡️ Menu Admin",
  ownerMenuButton: () => "👑 Menu Owner",
  securityMenuButton: () => "🚨 Menu Sicurezza",
  groupMenuButton: () => "👥 Menu Gruppo",
  aiMenuButton: () => "🤖 Menu IA",
  // Sposta qui le variabili del comando alcolizzato
  alcolPhraseHigh: () => "🍾 Amico se hai bisogno di parlare io ci sono..",
  alcolPhraseMedium: () => "🥂 Beve in modo responsabile, o quasi...",
  alcolPhraseLow: () => "🚰 Totalmente sobrio, niente sbronze per oggi!",
  alcolTestHeader: () => "『💬』 ══ •⊰✰⊱• ══ 『💬』",
  alcolTestTitle: () => "MOMENTO DEL TEST DELL'ALCOL! 🍷",
  alcolTestDefaultUser: () => "Tu",
  alcolTestLevel: (params) => `ha un tasso alcolemico del ${params?.width ?? 0}%! 🍷`,
  alcolTestFooter: () => "『💬』 ══ •⊰✰⊱• ══ 『💬』",

  amoreUsageCrush: (params) => `❗ Usa il comando così:\n${params?.usedPrefix}${params?.command} @utente`,
  amoreUsageShip: (params) => `❗ Usa il comando così:\n${params?.usedPrefix}${params?.command} @utente1 [@utente2]`,
  amoreInvalidUsers: () => '❌ Utenti non validi.',
  amoreDefaultUser1: () => 'Utente 1',
  amoreDefaultUser2: () => 'Utente 2',
  amoreCaption: (params) => `💘 *@${params?.user1}* ❤️ *@${params?.user2}*\n🔮 Compatibilità: *${params?.percent}%*`,
  amoreError: () => '❌ Errore durante la generazione dell’immagine.',
  baciaUsage: (params) => `Devi menzionare qualcuno o rispondere a un messaggio per baciarlo💋! Esempio: ${params?.usedPrefix}${params?.command} @utente`,
  baciaMentionRequired: () => "💋 *Devi menzionare qualcuno per baciarlo!*\nEsempio: *.bacia @utente*",
  baciaMessage: (params) => `💋 *${params?.senderName} ha dato un bacio a ${params?.targetName}!* 😘`,

kissNoMention: (userId, groupId) => `Devi menzionare qualcuno o rispondere a un messaggio per baciarlo💋! Esempio: {usedPrefix}{command} @utente`,
kissMentionRequired: (userId, groupId) => `💋 *Devi menzionare qualcuno per baciarlo!*\nEsempio: *.bacia @utente*`,
kissMessage: (userId, groupId, vars = {}) => `💋 *${vars.user1} ha dato un bacio a ${vars.user2}!* 😘`,

// Per il plugin Barzelletta
jokeEmoji: (userId, groupId) => "😂",
jokeSearching: (userId, groupId) => "😂 Cerco una barzelletta, attendi un momento...",
jokeFormat: (userId, groupId, vars = {}) => `*┏━_͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡_͜͡━┓*\n\n❥ *"${vars.joke}"*\n\n*┗━_͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡⚘-͜͡-͜͡-͜͡-͜͡-͜͡-͜͡_͜͡━┛*`,

// Per il plugin Blur
blurUsed: (userId, groupId) => "✨ È stato usato!!\nChatUnity",

// Per il plugin Bonk
bonkNoProfile: (userId, groupId) => "⚠️ Questo comando non funziona per utenti senza foto profilo.",
bonkError: (userId, groupId) => "❌ Si è verificato un errore durante l'esecuzione del comando.",
// CASINO/SCOMMETTI
casinoChooseAmount: (userId, groupId, vars = {}) => `💰 *CASINO* 💰\n\nScegli quanto vuoi scommettere:`,
casinoBetAmount: (userId, groupId, vars = {}) => `${vars.amount} 💶`,
casinoCooldown: (userId, groupId, vars = {}) => `⏰ Devi aspettare ${vars.tiempoRestante} prima di giocare di nuovo!`,
casinoLose: (userId, groupId, vars = {}) => `😢 *HAI PERSO!*\n\n🤖 Bot: ${vars.bot}\n👤 ${vars.username}: ${vars.user}\n\n💸 Hai perso: ${vars.count}€`,
casinoWin: (userId, groupId, vars = {}) => `🎉 *HAI VINTO!*\n\n🤖 Bot: ${vars.bot}\n👤 ${vars.username}: ${vars.user}\n\n💰 Hai vinto: ${vars.count * 2}€`,
casinoDraw: (userId, groupId, vars = {}) => `🤝 *PAREGGIO!*\n\n🤖 Bot: ${vars.bot}\n👤 ${vars.username}: ${vars.user}\n\n🔁 Ti restituisco: ${vars.count}€`,
casinoNotEnough: (userId, groupId, vars = {}) => `❌ Non hai abbastanza soldi per scommettere ${vars.count}€!`,
timeFormat: (userId, groupId, vars = {}) => `${vars.minutes}m ${vars.seconds}s`,

// COINFLIP
coinflipChooseAmount: (userId, groupId) => `🪙 *COINFLIP* 🪙\n\nScegli quanto vuoi puntare:\n\n💰 Puntate basse: 10€, 50€, 100€\n💰 Puntate medie: 500€, 1000€, 5000€\n💰 Puntate alte: 10.000€, 50.000€, 100.000€\n💰 Puntate estreme: 500.000€, 1.000.000€`,
coinflipFooter: (userId, groupId) => `🪙 Coinflip | 🎮 Minigames`,
coinflipBet10: (userId, groupId) => `10€`,
coinflipBet50: (userId, groupId) => `50€`,
coinflipBet100: (userId, groupId) => `100€`,
coinflipBet500: (userId, groupId) => `500€`,
coinflipBet1000: (userId, groupId) => `1.000€`,
coinflipBet5000: (userId, groupId) => `5.000€`,
coinflipBet10000: (userId, groupId) => `10.000€`,
coinflipBet50000: (userId, groupId) => `50.000€`,
coinflipBet100000: (userId, groupId) => `100.000€`,
coinflipBet500000: (userId, groupId) => `500.000€`,
coinflipBet1000000: (userId, groupId) => `1.000.000€`,
coinflipInvalidBet: (userId, groupId) => `❌ Inserisci una puntata valida!`,
coinflipInsufficient: (userId, groupId, vars = {}) => `💸 Saldo insufficiente!\n❌ Ti mancano *${vars.deficit}€* per giocare.`,
coinflipHeads: (userId, groupId) => `Testa`,
coinflipTails: (userId, groupId) => `Croce`,
coinflipResult: (userId, groupId, vars = {}) => `🪙 *TESTA O CROCE* 💿\n\nÈ uscito: *${vars.risultato}*\nLa tua scelta: *${vars.scelta}*\n\n${vars.win ? `🎉 *HAI VINTO*\n💰 Guadagni: +${vars.puntata}€` : `😢 *HAI PERSO*\n💸 Perdi: -${vars.puntata}€`}`,
coinflipHeadsButton: (userId, groupId, vars = {}) => `🪙 Testa (${vars.puntata}€)`,
coinflipTailsButton: (userId, groupId, vars = {}) => `💿 Croce (${vars.puntata}€)`,
coinflipChangeBet: (userId, groupId) => `💵 Cambia puntata`,

// CONTAPAROLE
countWordsNoText: (userId, groupId) => `> ⓘ 𝐅𝐨𝐫𝐧𝐢𝐬𝐜𝐢 𝐮𝐧 𝐭𝐞𝐬𝐭𝐨 𝐝𝐚 𝐜𝐨𝐧𝐭𝐚𝐫𝐞.`,
countWordsSpecialChars: (userId, groupId) => `> ⚠️ 𝐈𝐥 𝐭𝐞𝐬𝐭𝐨 𝐢𝐧𝐬𝐞𝐫𝐢𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 𝐜𝐚𝐫𝐚𝐭𝐭𝐞𝐫𝐢 𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐢.`,
countWordsResult: (userId, groupId, vars = {}) => ` ⓘ 𝐈𝐥 𝐭𝐞𝐬𝐭𝐨 𝐢𝐧𝐬𝐞𝐫𝐢𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐞𝐧𝐞 ${vars.wordCount} 𝐩𝐚𝐫𝐨𝐥𝐞${vars.hasNumbers ? ` 𝐞 ${vars.numberCount} 𝐧𝐮𝐦𝐞𝐫𝐢` : ''}${vars.hasNumbers ? '' : '.'}`,

// CORNUTO
cornutoNoTarget: (userId, groupId) => `🤔 Manca il nome della cornuta/o! \nScrivi così: .cornuto @nome oppure rispondi a un messaggio oppure chiedi a matte😈😈`,
cornutoSpecialTroll: (userId, groupId) => `🤣 *BHE, ECCO IL RE DELLE CORNA!* 🤣\nSi dice che se si leva le corna ci fa l'antenna 5G📡💀`,
cornutoClubName: (userId, groupId) => `👑 Club dei Cornuti Ufficiale 👑`,
cornutoLevel1: (userId, groupId) => `🛡 Tutto tranquillo... per ora!`,
cornutoLevel2: (userId, groupId) => `😬 Uhm... qualche sospetto c'è!`,
cornutoLevel3: (userId, groupId) => `👀 Cornometro in allerta! Occhio alle spalle!`,
cornutoLevel4: (userId, groupId) => `🫣 A LIVELLO NAZIONALE! SI PARLA DI CORNISSIMO!`,
cornutoResult: (userId, groupId, vars = {}) => `🔍 CALCOLATORE DI CORNUTEZZA 🔍\n\n👤 ${vars.target}\n📈 Cornutezza: ${vars.percent}%\n${vars.message}\n\n${vars.advice}`,
cornutoAdviceHigh: (userId, groupId) => `🔔 Consiglio: Mai voltare le spalle! 🤣`,
cornutoAdviceLow: (userId, groupId) => `😌 Respira, potrebbe andare peggio...`,
cornutoUsage: (userId, groupId) => `❗ Scrivi un nome, esempio: .cornuto @utente`,
// ANAL/CULOMETRO
analSize1: (userId, groupId) => "🟢 Piccolo come una formica 🐜",
analSize2: (userId, groupId) => "🔵 Normale, niente di speciale 😌",
analSize3: (userId, groupId) => "🟠 Medio, ci passa un dito 🖕",
analSize4: (userId, groupId) => "🔴 Enorme! Ci passa una bottiglia 🍾",
analSize5: (userId, groupId) => "⚫ Distrutto, sembra un tunnel ferroviario 🚇",
analSize6: (userId, groupId) => "💥 Non hai più un buco, è esploso 💣",
analAnalyzing: (userId, groupId) => "*Analizzando il tuo buco...*",
analResult: (userId, groupId) => "📏 *Risultato:*",
botName: (userId, groupId) => "ChatUnity",
// DOWN/RITARDATO
downNoTarget: (userId, groupId, vars = {}) => `🚨 *TAGGA QUALCUNO, DIO CANE!* 🚨\nEsempio: *${vars.usedPrefix}${vars.command} @tuoexmiglioreamico*`,
downPhrase1: (userId, groupId) => `🧠 *Il suo QI? Stabile come il Bitcoin nel 2018.* 📉`,
downPhrase2: (userId, groupId) => `💡 *Se l'ignoranza fosse luce, sarebbe un faro.* 🌟`,
downPhrase3: (userId, groupId) => `🏆 *Campione olimpico di "Eh?" e "Come?"* 🥇`,
downPhrase4: (userId, groupId) => `🦉 *Saggezza zero, ma almeno è simpatico... no?* 🙃`,
downPhrase5: (userId, groupId) => `🌌 *La sua mente? Un vuoto cosmico.* 🚀`,
downPhrase6: (userId, groupId) => `📚 *Se la stupidità fosse un libro, sarebbe un'enciclopedia.* 📖`,
downPhrase7: (userId, groupId) => `🛠️ *Ha due neuroni e litigano per il terzo posto.* ⚡`,
downPhrase8: (userId, groupId) => `🎭 *Parla tanto ma dice sempre... nulla.* 🤡`,
downResult: (userId, groupId, vars = {}) => `⚡ *📜 VERDETTO UFFICIALE DI "${vars.command}" 📜* ⚡\n\n🧑 *Soggetto Analizzato:* ${vars.name}  \n📉 *Livello di "${vars.command}":* ${vars.percent}% ${vars.dangerLevel}  \n\n${vars.phrase}  \n\n${vars.warning}  \n\n💥 *CONCLUSIONE:* ${vars.conclusion}`,
downDangerHigh: (userId, groupId) => `☠️ *GRAVE PERICOLO SOCIALE* ☠️`,
downDangerLow: (userId, groupId) => `🤏 *Quasi accettabile... quasi*`,
downWarningHigh: (userId, groupId) => `🚨 *AVVERTENZA:* La sua presenza potrebbe causare perdita di cellule cerebrali. Usare con cautela.`,
downWarningLow: (userId, groupId) => `🦸 *Miracolo! Riesce a respirare e pensare contemporaneamente!*`,
downWarningMedium: (userId, groupId) => `💀 *Sopravviverai... forse.*`,
downConclusionHigh: (userId, groupId) => `*La selezione naturale ha fallito.*`,
downConclusionLow: (userId, groupId) => `*Potrebbe essere utile come esempio di cosa non fare.*`,
downNewsletterName: (userId, groupId) => `🔥 *SALA VERDETTI SPARATI* 🔥`,

// DITALINO/FINGER
fingerNoTarget: (userId, groupId) => `Tagga qualcuno o rispondi a un messaggio per iniziare il ditalino.`,
fingerSequence1: (userId, groupId, vars = {}) => `🤟🏻 Inizio una serie di ditalino per *${vars.name}*...`,
fingerSequence2: (userId, groupId) => `🤟🏻 Ci siamo quasi...`,
fingerSequence3: (userId, groupId) => `👋🏻 Riparatevi dalla cascata!!`,
fingerResult: (userId, groupId, vars = {}) => `✨ *${vars.name}* è venuta🥵! Sta spruzzando come una cozza dopo *${vars.time}ms*!`,
// DROGATO
drugTestTitle: (userId, groupId) => "MOMENTO DEL DRUG TEST! 🌿",
drugTestResult: (userId, groupId, vars = {}) => `${vars.target} ha un tasso alcolemico del ${vars.percent}%! 🌿`,
drugTestHigh: (userId, groupId) => "🌿 Attenti che si pippa pure la farina",
drugTestMedium: (userId, groupId) => "🌿 Non sa pippare, aumenta le dosi!!",
drugTestLow: (userId, groupId) => "🌿 Un'esempio da seguire, complimenti.",
botName: (userId, groupId) => "ChatUnity",

// TICTACTOE EXIT
tttExitNoGame: (userId, groupId) => "Sei uscito dalla partita",
tttExitSuccess: (userId, groupId) => "Sei uscito dalla partita",
tttStartNewGame: (userId, groupId) => "𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾",

// FIGA
figaCalculatorTitle: (userId, groupId) => "📏 CALCOLATORE DI APERTURA 📏",
figaResult: (userId, groupId, vars = {}) => `🔍 ${vars.target} ha un'apertura stimata di:\n👉 ${vars.width} cm!`,
figaHigh: (userId, groupId) => "🔥 Complimenti, siamo su livelli impressionanti!",
figaLow: (userId, groupId) => "😅 Un risultato discreto, c'è sempre margine di miglioramento!",

// FIFA/FUT
futInventory: (userId, groupId, vars = {}) => `💼 *Inventario FUT:*\n🥉 Bronze: ${vars.bronze} • 🥈 Silver: ${vars.silver} • 🥇 Gold: ${vars.gold}\n\n💸 UnityCoin: ${vars.limit}\n\n🎁 Scegli pacchetto da aprire 👇`,
futStoreTitle: (userId, groupId) => "🛒 *FUT Store*",
futStorePrices: (userId, groupId, vars = {}) => `🥉 Bronze: ${vars.bronzePrice} 💸\n🥈 Silver: ${vars.silverPrice} 💸\n🥇 Gold: ${vars.goldPrice} 💸\n\n💸 Saldo attuale: ${vars.limit}`,
futBuySuccess: (userId, groupId, vars = {}) => `✅ Acquistato un pacchetto *${vars.type}*! Ne hai ora: ${vars.count}`,
futBuyInsufficient: (userId, groupId, vars = {}) => `❌ Ti servono ${vars.price} UnityCoin 💸 per un pacchetto ${vars.type}`,
futOpenSuccess: (userId, groupId, vars = {}) => `🎉 Aprendo pacchetto *${vars.type}*...`,
futOpenNoPack: (userId, groupId, vars = {}) => `❌ Nessun pacchetto ${vars.type} da aprire.`,
futPlayerCard: (userId, groupId, vars = {}) => `🌟 *${vars.name}* (${vars.rating}⭐)\n📍 ${vars.position} | ${vars.club} | ${vars.nation}`,
futAdditionalPlayer: (userId, groupId, vars = {}) => `➕ ${vars.name} (${vars.rating}⭐)`,
futNoPlayers: (userId, groupId) => "📭 Nessun giocatore in rosa.",
futFooter: (userId, groupId) => "Holly FUT Bot ⚽",
futStoreFooter: (userId, groupId) => "Compra pacchetti con Holly Cash",
futOpenBronze: (userId, groupId) => "🥉 Apri bronze",
futOpenSilver: (userId, groupId) => "🥈 Apri silver",
futOpenGold: (userId, groupId) => "🥇 Apri gold",
futBuyStore: (userId, groupId) => "🛒 Compra pacchetti",

// HORNY
hornyCardTitle: (userId, groupId) => "*Quanto sei horny 🥵🔥*",

// INFAME/SBIRRO
infameTestTitle: (userId, groupId) => "📊 *TEST INFAME-Z* 📊",
infameTestResult: (userId, groupId, vars = {}) => `👤 *Il tuo livello di infame:* **${vars.percent}%**`,
infameLevelHigh: (userId, groupId) => "🚨 *SEI L'ADMIN DEGLI SBIRRI!* 🚨",
infameLevelMedium: (userId, groupId) => "😎 *Sei nella zona pericolosa...*",
infameLevelLow: (userId, groupId) => "🧼 *Pulito... forse.*",
infameSavage1: (userId, groupId) => "🧢 *\"Nah, sei pulito\"* (ma sotto il {percent}% sei un po' sospetto...)",
infameSavage2: (userId, groupId) => "👀 *\"Fra, ma sei la pecora nera della chat?\"*",
infameSavage3: (userId, groupId) => "💀 *\"Sei il motivo per cui le nonne nascondono il portafoglio\"*",
infameSavage4: (userId, groupId) => "🤡 *\"Se l'infamia fosse un TikTok, saresti virale\"*",
infameSavage5: (userId, groupId) => "🚓 *\"Polizia locale? No, DITTATORIALE con sto livello\"*",
infameSavage6: (userId, groupId) => "🤑 *\"Se rubassi come infami, saresti Jeff Bezos\"*",
infameSavage7: (userId, groupId) => "📸 *\"Sei lo screenshot che non dovevi fare\"*",
infameSavage8: (userId, groupId) => "🔥 *\"Hai più scheletri nell'armadio che followers\"*",
infameAdTitle: (userId, groupId) => "⚠️ Sei stato GIOBATO ⚠️",
infameAdBody: (userId, groupId) => "Risultati ufficiali (e inappellabili)"

}
