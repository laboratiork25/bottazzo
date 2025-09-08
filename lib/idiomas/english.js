/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                    CHATUNITY BOT - ENGLISH TRANSLATIONS                     ║
 * ║                                                                              ║
 * ║  ► Versione: 7.0 Beta                                                       ║
 * ║  ► Sviluppatore: Army                                                       ║
 * ║  ► Update: Enhanced Menu Translations & Multilingual Support               ║
 * ║  ► Data: 2025                                                               ║
 * ║                                                                              ║
 * ║  File delle traduzioni inglesi per il supporto multilingue completo       ║
 * ║  del bot con tutte le chiavi di traduzione per menu e comandi.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

export default {
  // General system
  smsAvisoMG: () => "⚠️ Warning!",
  smsWait: () => "⏳ Loading...",
  smsError: () => "❌ An error occurred",
  smsSuccess: () => "✅ Operation completed successfully",
  smsProcessing: () => "🔄 Processing...",
  
  // General commands
  smsOnlyGroup: () => "❌ This command only works in groups!",
  smsOnlyAdmin: () => "❌ Only admins can use this command!",
  smsOnlyOwner: () => "❌ Only the owner can use this command!",
  smsOnlyPremium: () => "💎 This command is only available for premium users!",
  smsInvalidCommand: () => "❌ Invalid command",
  smsNoText: () => "❌ Please enter some text",
  smsNoMedia: () => "❌ Send or reply to a media file",
  
  // AI and ChatGPT
  aiNoQuery: () => "⚠️ *Enter a valid request for ChatGPT!*\n\n📌 Examples:\n{prefix}{command} Tell me a joke\n{prefix}{command} Suggest 5 fantasy books\n{prefix}{command} HTML code for a login page",
  aiError: () => "❌ An error occurred while generating the response. Please try again later.",
  aiProcessing: () => "🤖 Processing your request...",
  
  // Welcome/goodbye system
  welcomeTitle: () => "✧ WELCOME! ✧",
  goodbyeTitle: () => "✧ GOODBYE! ✧",
  welcomeDefault: (user, group, members) => `*Welcome* @${user} 🎉\n┊ *Group:* ${group}\n╰► *Members:* ${members}`,
  goodbyeDefault: (user, members) => `*Goodbye* @${user} 👋\n┊ Left the group\n╰► *Members remaining:* ${members}`,
  
  welcomeSetHelp: () => `🎉 *Set welcome message*

*Usage:* {command} <message>

*Available variables:*
• @user - User tag
• $nome - User name  
• $gruppo - Group name
• $membri - Member count
• $numero - Phone number
• $tag - User tag (alias of @user)

*Example:*
{command} Hello @user! 👋 Welcome to $gruppo! We are now $membri members! 🎉

*To reset to default message:*
{command} reset`,
  
  goodbyeSetHelp: () => `👋 *Set goodbye message*

*Usage:* {command} <message>

*Available variables:*
• @user - User tag
• $nome - User name  
• $gruppo - Group name
• $membri - Member count
• $numero - Phone number
• $tag - User tag (alias of @user)

*Example:*
{command} Goodbye @user! 😢 We'll miss you in $gruppo. We remain $membri members.

*To reset to default message:*
{command} reset`,
  
  welcomeReset: () => "✅ Welcome message reset to default!",
  goodbyeReset: () => "✅ Goodbye message reset to default!",
  welcomeSet: () => "✅ Custom welcome message set!",
  goodbyeSet: () => "✅ Custom goodbye message set!",
  
  // Language system
  languageChanged: (params) => `🌍 Language changed to: ${params?.lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  languageHelp: () => `🌍 *Language Management*\n\n*Available languages:*\n• 🇮🇹 Italiano (it)\n• 🇺🇸 English (en)\n\n*Usage:*\n• In groups (admins/owner only):\n  {prefix}language it  — Set group language to Italian\n  {prefix}language en  — Set group language to English\n• In private chat: sets your personal language\n\n{prefix}language — Show current language`,
  currentLanguage: (params) => `🌍 Current language: ${params?.lang === 'it' ? 'Italiano 🇮🇹' : 'English 🇺🇸'}`,
  invalidLanguage: () => "❌ Invalid language. Use 'it' for Italian or 'en' for English.",
  
  // Admin system
  adminOnly: () => "👑 Only administrators can use this command!",
  ownerOnly: () => "🔒 Only the bot owner can use this command!",
  
  // Anti-spam system
  antiSpamWarning: () => "⚠️ Don't spam! Slow down with messages.",
  antiSpamMuted: () => "🔇 You have been muted for spamming.",
  
  // Group messages: open/close and clearplay
  groupOpenSuccess: () => "Chat opened for all",
  groupCloseSuccess: () => "Chat set to admins only",
  groupSettingsError: () => "❌ I can't change settings: make sure I'm admin!",
  clearplayOnlyAdmins: () => "❌ Only admins can use this command!",
  clearplayAlreadyEmpty: () => "✅ The folder is already empty!",
  clearplayNoFiles: () => "✅ No files to delete!",
  clearplaySuccess: () => "🗑️ Play folder emptied successfully!",
  
  // Bible / Quran
  bibleFetchError: () => "⚠️ Error fetching the verse. Use a valid reference like John 3:16",
  quranFetchError: () => "⚠️ Error fetching the verse. Use a valid reference like 2:255",
  
  // Set group description
  setDescInvalid: () => "Please enter a valid description.",
  setDescSuccess: () => "✅ Group description updated successfully!",
  setDescError: () => "❌ An error occurred while updating the description.",
  
  // Kick
  botMustBeAdmin: () => "ⓘ I must be admin to operate",
  mentionToRemove: () => "ⓘ Mention the person to remove",
  cannotRemoveOwnerBot: () => "ⓘ You can't remove the bot creator",
  cannotRemoveBot: () => "ⓘ You can't remove the bot",
  cannotRemoveSelf: () => "ⓘ You can't remove yourself",
  targetIsGroupOwner: () => "ⓘ The user you tried to remove is the group owner",
  targetIsAdmin: () => "ⓘ The user you tried to remove is an admin",
  kickRemoved: (p) => `@${p?.target} was removed by @${p?.by}${p?.reason ? `\n\nReason: ${p?.reason}` : ''}`,
  
  // Minecraft link
  minecraftMainText: () => "🎮 FREE AND SAFE MINECRAFT GAME! 🎮\n\nDiscover Eaglercraft, the browser version of Minecraft you can play ANYWHERE!\n\n🔗 Direct link: https://eaglercraft.com/\n✅ 100% Free\n🔒 Safe and no download\n🌐 Play directly in your browser\n\nOpen the link above to play!",
  minecraftFooter: () => "© ChatUnity - Have fun!",
  minecraftCaption: () => "Here's what Eaglercraft looks like! 👆",
  minecraftError: () => "❌ Error showing the link. Please try again later.",
  
  // Quarantine
  quarantineOnlyOwners: () => "❌ Command reserved exclusively for bot owners!",
  quarantineBotAdminRequired: () => "❌ The bot must be an administrator to execute this command!",
  quarantineAllAdminsAuthorized: () => "⚠ All current administrators are authorized (bot, owner and founder).",
  quarantineChatLocked: () => "🔒 Chat locked: now only admins can send messages.",
  quarantineStarting: () => "⚠ Starting quarantine procedure...",
  quarantineCompleted: (p) => `✅ Quarantine completed!\n\n👑 Founder: @${p?.owner}\n🤖 Bot: @${p?.bot}\n🛡️ Authorized admins: ${p?.count}`,
  
  // Friends list
  friendsListTitle: (p) => `📜 Friends List of ${p?.name}`,
  friendsLastFriend: (p) => `👤 Last Friend: ${p?.last}`,
  friendsCompleteList: () => "👥 Full List:",
  friendsNone: () => "None",
  friendsLoneWolf: () => "│   None — lone wolf, huh",
  friendsError: () => "❌ An error occurred while executing the command.",

  // Scheduled group messages
  scheduledGroupOpened: () => "✅ The group is now open. Everyone can write.",
  scheduledGroupClosed: () => "🔒 The group is now closed. Only administrators can write.",

  // setorario command
  setorarioGroupOnly: () => "❌ This command can only be used in groups.",
  setorarioHelp: () => "❓ Available commands:\n\n• #setorario set <open time> <close time> - Set times\n• #setorario disable - Disable automatic times\n• #setorario status - Show current times\n\nExample: #setorario set 08:00 22:00",
  setorarioUseCorrect: () => "❌ Use the command correctly:\n\n#setorario set <open_time> <close_time>\nExample: #setorario set 08:00 22:00",
  setorarioInvalidFormat: () => "❌ Times must be in HH:MM format (e.g., 08:00).",
  setorarioSetSuccess: (p) => `✅ Times set successfully:\n- Open: ${p?.open}\n- Close: ${p?.close}\n\nThe group will open and close automatically every day.`,
  setorarioNoConfig: () => "❌ There are no configured times for this group.",
  setorarioDisabled: () => "✅ Automatic times have been disabled for this group.",
  setorarioConfiguredStatus: (p) => `📅 Configured times for this group:\n- Open: ${p?.open}\n- Close: ${p?.close}\n- Status: ${p?.status}\n\nTo modify: #setorario set <open_time> <close_time>`,
  setorarioUnknownCommand: () => "❓ Unknown command. Use the commands in #setorario help.",

  // Group rules
  groupRulesSetSuccess: () => "ⓘ Group rules set successfully",
  groupRulesNotSet: () => "ⓘ No group rules set",

  // Warn
  warnNeedTarget: () => "❌ You must mention a user or reply to their message.",
  warnCantWarnBot: () => "🚫 You can't warn the bot.",
  warnUserNotFound: () => "❌ User not found in the database.",
  warnProgress: (p) => `⚠️ WARNING ${p?.count}/3 (3 warns = ban)`,
  warnRemovedAfter3: () => "⛔ USER REMOVED AFTER 3 WARNINGS",
  
  // Proposal command (consiglia)
  proposeProvideCommand: () => "⚠️ Enter the command you want to propose. E.g.: .consiglia <command> <explanation>",
  proposeDescribeBetter: () => "⚠️ Describe the command better (minimum 10 characters).",
  proposeMaxLength: () => "⚠️ Maximum allowed length: 1000 characters.",
  proposeConfirmSent: () => "✅ Your proposal has been sent to the developer.\n_⚠ Illicit commands may result in restrictions._",
  
  // Recipes (gp-ricette)
  recipeUsage: (p) => `🍽️ Usage:\n${p?.prefix}${p?.command} <ingredient(s)>\nExample: ${p?.prefix}${p?.command} zucchini, potatoes`,
  recipeError: () => "⚠️ Error generating the recipe. Please try again shortly.",

  // Report (gp-segnala)
  reportProvideCommand: () => "⚠ Enter the command you want to report.",
  reportDescribeBetter: () => "⚠️ Describe the problem better (minimum 10 characters).",
  reportMaxLength: () => "⚠️ Maximum allowed length: 1000 characters.",
  reportConfirmSent: () => "✅ Your report has been sent to the developer.\n_⚠ False reports may result in restrictions._",

  // Flag game (gp-bandiera)
  flagNoActiveGame: () => "⚠️ There is no active game in this group!",
  flagGameInterrupted: (p) => `🛑 Flag game stopped by admin\n✨ The answer was: ${p?.answer ? `*${p.answer}*` : ''}`,
  flagCooldown: (p) => `⏳ Please wait ${p?.seconds || 0} more seconds before starting a new game!`,
  flagTimeExpired: (p) => `⏳ Time's up!\n\n🌍 The answer was: *${p?.answer || ''}*`,
  flagAlmostThere: () => "👀 You're almost there!",
  flagAttemptsExhausted: () => "❌ You have used all 3 attempts!\n\n⏳ Wait for other players or for the time to end",
  flagWrongAnswerTryAgain: () => "❌ Wrong answer!\n\n📝 Attempts left:\n🤔 Think carefully about your next answer!",
  flagWrongAnswerLastTry: () => "❌ Wrong answer!\n\n📝 Last attempt left..",
  muteUsage: (p) => `ㅤㅤ⋆｡˚『 ╭ \`COMMAND USAGE\` ╯ 』˚｡⋆\n╭\n│ 『 ❌』 \`format:\` ${p?.prefix || '.'}mute @user [minutes] [reason]\n│ 『 💡 』 \`or:\` reply to a message\n╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─`,
  alreadyMuted: () => "ⓘ This user is already muted 🔇",
  alreadyUnmuted: () => "ⓘ This user is not muted",
  userMuted: (p) => `🔇 User @${p?.user || 'user'} has been muted by @${p?.muter || 'admin'}\n\n${p?.reason ? `Reason: ${p.reason}` : 'No reason specified'}`,
  userUnmuted: (p) => `✅ User @${p?.user || 'user'} has been unmuted by @${p?.muter || 'admin'}`,
  noReason: () => "No reason specified",
  // listpl.js
  noJsPluginsFound: () => "📂 No JavaScript plugins found",
  noPluginsFoundFor: (p) => `🔍 No plugins found for: ${p?.searchTerm || 'search term'}`,
  availablePlugins: (p) => `📂 ${p?.bold('Available Plugins')} (${p?.count || 0})\n\n`,
  useListplDForDetails: (p) => `💡 Use ${p?.bold('.listpl d')} for details`,  
  useListplSearch: (p) => `🔍 Use ${p?.bold('.listpl <name>')} to search`,
  // gp-link.js
  groupLinkTitle: () => "Here is the group link:",
  groupLinkFooter: () => "Choose one of the following options:",
  // gp-setnome.js
  groupNameMissing: () => "⚠️ Please enter the new group name",
  groupNameUpdated: () => "✅ Group name updated successfully!",
  groupNameUpdateError: () => "❌ Error updating group name",
  // gp-promuovi.js
  promoteNoTarget: () => "⚠️ Mention the user to promote",
  promoteInvalidNumber: () => "❌ Invalid number",
  promoteAlreadyAdmin: (p) => `@${p?.user || 'user'} is already an administrator`,
  promoteSuccess: (p) => `✅ @${p?.user || 'user'} has been promoted to administrator`,
  promoteError: () => "❌ Error promoting user",
  // gp-retrocedi.js
  demoteNoTarget: () => "⚠️ Mention the user to demote",
  demoteInvalidNumber: () => "❌ Invalid number",
  demoteNotAdmin: (p) => `@${p?.user || 'user'} is not an administrator`,
  demoteSuccess: (p) => `✅ @${p?.user || 'user'} has been demoted`,
  demoteError: () => "❌ Error demoting user",
  // Menu plugins
  mainMenuTitle: () => "MAIN MENU",
  adminMenuTitle: () => "ADMIN MENU",
  ownerMenuTitle: () => "OWNER MENU",
  securityMenuTitle: () => "SECURITY MENU",
  groupMenuTitle: () => "GROUP MENU",
  aiMenuTitle: () => "AI MENU",
  adminCommands: () => "ADMIN COMMANDS",
  ownerReservedCommands: () => "OWNER RESERVED COMMANDS",
  memberCommands: () => "MEMBER COMMANDS",
  musicAudioSection: () => "MUSIC & AUDIO",
  infoUtilitySection: () => "INFORMATION & UTILITIES",
  imageEditSection: () => "IMAGES & EDITING",
  pokemonSection: () => "POKEMON",
  gangSystemSection: () => "GANG SYSTEM",
  gamesCasinoSection: () => "GAMES & CASINO",
  economyRankingSection: () => "ECONOMY & RANKINGS",
  socialInteractionSection: () => "SOCIAL INTERACTIONS",
  howMuchSection: () => "HOW MUCH?",
  personalityTestSection: () => "PERSONALITY TESTS",
  activateDisable: () => "ACTIVATE/DISABLE",
  howToUse: () => "HOW TO USE",
  activateFunction: () => "activate [function]",
  disableFunction: () => "disable [function]",
  generalCommands: () => "GENERAL COMMANDS",
  chooseMenu: () => "Choose a menu:",
  mainMenuButton: () => "🏠 Main Menu",
  adminMenuButton: () => "🛡️ Admin Menu",
  ownerMenuButton: () => "👑 Owner Menu",
  securityMenuButton: () => "🚨 Security Menu",
  groupMenuButton: () => "👥 Group Menu",
  aiMenuButton: () => "🤖 AI Menu",
  
  // File and media system
  pingCaption: (p) => `╭━〔🚀 SYSTEM STATUS 🚀〕━┈⊷\n┃◈╭─────────────·๏\n┃◈┃• ⌛ *Uptime*: ${p?.uptime || '-'}\n┃◈┃• ⚡ *Ping*: ${p?.latency || '-'} ms\n┃◈┃\n┃◈┃• 💻 *CPU*: ${p?.cpuModel || '-'}\n┃◈┃• 🔋 *Usage*: ${p?.cpuSpeed || '-'} MHz \n┃◈┃\n┃◈┃• 💾 *RAM*: ${p?.ramUsed || '-'} / ${p?.ramTotal || '-'}\n┃◈┃• 🟢 *Free*: ${p?.ramFree || '-'}\n╰━━━━━━━━━━━━━┈·๏\n`,
  fileNotFound: () => "📁 File not found",
  fileTooLarge: () => "📁 File too large",
  invalidFormat: () => "📁 Invalid file format",
  
  // Group system
  groupInfoUpdated: () => "ℹ️ Group information updated",
  userPromoted: (user) => `👑 @${user} has been promoted to administrator`,
  userDemoted: (user) => `👤 @${user} has been removed from administrators`,
  userKicked: (user) => `🚫 @${user} has been removed from the group`,
  
  // Economy system (if present)
  noCoins: () => "💰 You don't have enough coins!",
  coinsEarned: (amount) => `💰 You earned ${amount} coins!`,
  
  // Help system
  helpMenu: () => `📋 *ChatUnity Bot Help Menu*\n\n🤖 *AI Commands:*\n• {prefix}ai <text> - ChatGPT\n• {prefix}img <text> - Generate images\n\n👥 *Group Commands:*\n• {prefix}welcome - Manage welcome messages\n• {prefix}antilink - Toggle antilink\n\n🌍 *Language:*\n• {prefix}language <it/en> - Change language\n\n📞 *Support:*\n• {prefix}support - Contact support`,
  
  // Menu system
  mainMenuTitle: () => '𝑴𝑨𝑰𝑵 𝑴𝑬𝑵𝑼',
  adminMenuTitle: () => '𝑨𝑫𝑴𝑰𝑵 𝑴𝑬𝑵𝑼',
  adminCommands: () => '𝑨𝑫𝑴𝑰𝑵 𝑪𝑶𝑴𝑴𝑨𝑵𝑫𝑺',
  chooseMenu: () => 'Choose a menu:',
  mainMenuButton: () => '🏠 Main Menu',
  ownerMenuButton: () => '👑 Owner Menu',
  securityMenuButton: () => '🚨 Security Menu',
  groupMenuButton: () => '👥 Group Menu',
  aiMenuButton: () => '🤖 AI Menu',
  promoteCommand: () => 'promote /makeadmin',
  demoteCommand: () => 'demote /removeadmin',
  warnCommands: () => 'warn / unwarn',
  muteCommands: () => 'mute / unmute',
  setDescCommand: () => 'setdescription',
  setScheduleCommand: () => 'setschedule',
  setNameCommand: () => 'setname',
  hidetagCommand: () => 'hidetag',
  kickCommand: () => 'kick / remove',
  adminsCommand: () => 'admins',
  tagallCommand: () => 'tagall',
  openCloseCommand: () => 'open / close',
  setWelcomeCommand: () => 'setwelcome',
  setByeCommand: () => 'setbye',
  inactiveCommand: () => 'inactive',
  listNumCommand: () => 'listnum + prefix',
  cleanupCommand: () => 'cleanup + prefix',
  clearPlayCommand: () => 'clearplay',
  rulesCommand: () => 'rules/setrules',
  quarantineCommand: () => 'quarantine',
  dsCommand: () => 'ds',
  listWarnCommand: () => 'listwarn',
  linkCommand: () => 'link',
  linkQrCommand: () => 'linkqr',
  poweredBy: () => 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ',
  
  // Group menu
  groupMenuTitle: () => '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔',
  memberCommands: () => '𝐌𝐄𝐌𝐁𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒',
  musicAudioSection: () => 'MUSIC & AUDIO',
  infoUtilitySection: () => 'INFORMATION & UTILITIES',
  imageEditSection: () => 'IMAGES & EDITING',
  pokemonSection: () => 'POKEMON',
  gangSystemSection: () => 'GANG SYSTEM',
  gamesCasinoSection: () => 'GAMES & CASINO',
  economyRankingSection: () => 'ECONOMY & RANKINGS',
  socialInteractionSection: () => 'SOCIAL INTERACTIONS',
  howMuchSection: () => 'HOW MUCH?',
  personalityTestSection: () => 'PERSONALITY TESTS',
  songCommand: () => 'song',
  audioCommand: () => 'audio',
  videoCommand: () => 'video',
  artistTitleCommand: () => 'artist-title',
  cityCommand: () => 'city',
  textCommand: () => 'text',
  groupCommand: () => 'group',
  repoCommand: () => 'repo',
  userCommand: () => 'user',
  topicCommand: () => 'topic',
  checkSiteCommand: () => 'check site',
  photoToStickerCommand: () => 'photo to sticker',
  stickerToPhotoCommand: () => 'sticker to photo',
  improveQualityCommand: () => 'improve photo quality',
  photoCommand: () => 'photo',
  hiddenPhotoCommand: () => 'hidden photo',
  memeCommand: () => 'meme',
  fromStickerCommand: () => 'from sticker',
  blurImageCommand: () => 'blur image',
  comingSoonCommand: () => 'coming soon',
  quantityCommand: () => 'quantity',
  headsOrTailsCommand: () => 'heads or tails',
  mathProblemCommand: () => 'math problem',
  rockPaperScissorsCommand: () => 'rock paper scissors',
  pokemonInfoCommand: () => 'Pokémon info',
  balanceCommand: () => 'balance',
  topUsersCommand: () => 'top users',
  buyUCCommand: () => 'buy UC',
  withdrawUCCommand: () => 'UC from bank',
  earnXPCommand: () => 'earn XP',
  proposalCommand: () => 'proposal',
  endRelationshipCommand: () => 'end relationship',
  affinityCommand: () => 'affinity',
  charmCommand: () => 'charm',
  createFightCommand: () => 'create fights',
  truthOrDareCommand: () => 'truth or dare',
  versionLabel: () => 'VERSION',
  collabLabel: () => 'COLLAB: ONE PIECE',
  supportLabel: () => 'SUPPORT',
  
  // Owner menu
  ownerMenuTitle: () => '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔',
  ownerReservedCommands: () => '𝐑𝐄𝐒𝐄𝐑𝐕𝐄𝐃 𝐎𝐖𝐍𝐄𝐑 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒',
  setNameCommand: () => 'setname',
  resetNameCommand: () => 'resetname',
  manageCommand: () => 'manage',
  setGroupsCommand: () => 'setgroups',
  addGroupsCommand: () => 'addgroups',
  resetGroupsCommand: () => 'resetgroups',
  setPpCommand: () => 'setpp',
  banUserCommand: () => 'banuser',
  unbanUserCommand: () => 'unbanuser',
  blockUserCommand: () => 'blockuser',
  unblockUserCommand: () => 'unblockuser',
  getFileCommand: () => 'getfile',
  saveCommand: () => 'save',
  dpCommand: () => 'dp',
  getPluginCommand: () => 'getplugin',
  joinCommand: () => 'join',
  outCommand: () => 'out',
  prefixCommand: () => 'prefix',
  resetPrefixCommand: () => 'resetprefix',
  godModeCommand: () => 'godmode',
  resetCommand: () => 'reset',
  addCommand: () => 'add',
  removeCommand: () => 'remove',
  everyGroupCommand: () => 'everygroup',
  banChatCommand: () => 'banchat',
  unbanChatCommand: () => 'unbanchat',
  restartCommand: () => 'restart',
  shutdownBotCommand: () => 'shutdownbot',
  updateBotCommand: () => 'updatebot',
  imageParam: () => 'image',
  pluginParam: () => 'plugin',
  linkParam: () => 'link',
  autoAdminParam: () => 'autoadmin',
  numMessagesParam: () => 'num. messages',
  commandParam: () => 'command',
  groupParam: () => 'group',
  
  // Menu AI
  aiMenuTitle: () => 'AI BOT MENU',
  generalCommands: () => 'GENERAL COMMANDS',
  iaCommand: () => 'ai',
  alyaCommand: () => 'Alya',
  geminiCommand: () => 'gemini',
  chatgptCommand: () => 'chatgpt',
  deepseekCommand: () => 'deepseek',
  voiceCommand: () => 'voice',
  imageCommand: () => 'image',
  image2Command: () => 'image2',
  image3Command: () => 'image3',
  animalInfoCommand: () => 'animalinfo',
  kcalCommand: () => 'kcal',
  summaryCommand: () => 'summary',
  recipeCommand: () => 'recipe',
  
  // Menu Security
  securityMenuTitle: () => 'SECURITY FUNCTIONS MENU',
  activateDisable: () => 'ACTIVATE/DISABLE',
  howToUse: () => 'HOW TO USE',
  activateFunction: () => 'activate [function]',
  disableFunction: () => 'disable [function]',
  
  // AI DeepSeek
  deepseekNoText: () => '*Enter text to talk with DeepSeek AI.*',
  deepseekNoResponse: () => '❌ No valid response obtained from DeepSeek AI.',
  deepseekError: () => '*❌ Error processing the request.*',
  
  // AI Gemini
  geminiNoText: () => 'What do you want?',
  geminiNoResponse: () => 'I did not receive a valid response from the API. Try again later.',
  geminiError: () => 'An error occurred. Please try again later.',
  geminiConsoleError: () => 'Error in command',
  
  // AI Summary
  summaryUsage: () => '❗ Use the command like this:\n<command> <long text>\nOr reply to a long message with the command',
  summaryTooLong: () => '❌ Text is too long. Maximum limit: 2500 characters.',
  summaryEmptyResponse: () => 'Empty response from API.',
  summaryTitle: () => 'Summary',
  summaryConsoleError: () => '[❌ summary plugin error]',
  summaryError: () => '⚠️ Error generating summary. Try again later.',
  
  // AI Shazam
  shazamFileTooLarge: () => '╯⊱⚠️⊱ *WARNING | ATTENZIONE* ⊱⚠️⊱╮\n\nThe file you uploaded is too large, we recommend cutting the file into a smaller fragment. 10-20 seconds of audio is sufficient for identification',
  shazamSearchResult: () => 'SEARCH RESULT',
  shazamTitle: () => 'TITLE',
  shazamArtist: () => 'ARTIST',
  shazamAlbum: () => 'ALBUM',
  shazamGenre: () => 'GENRE',
  shazamReleaseDate: () => 'RELEASE DATE',
  shazamNotFound: () => 'Not found',
  shazamWrongUsage: () => '╯⊱❗️⊱ *WRONG USAGE* ⊱❗️⊱╮\n\nREPLY TO AN AUDIO OR VIDEO',
  
  // AI Support
  supportGreeting: () => 'Hello! I am the ChatUnity-bot AI assistant, how can I help you today?',
  supportNoResponse: () => 'I did not receive a valid response from the API. Try again later.',
  supportError: () => 'An error occurred. Please try again later.',
  supportConsoleError: () => 'Error in command',
  
  // AI Voice
  voiceFFmpegError: () => 'ffmpeg not found or error in audio processing. Make sure ffmpeg is installed and accessible in PATH.',
  voiceDefaultResponse: () => 'What do you want',
  voiceNoUnderstand: () => 'I did not understand, can you repeat?',
  voiceInvalidFile: () => 'Error: invalid audio file.',
  voiceError: () => 'Unknown error. Try again later.',
  voiceConsoleError: () => 'Error in command',
  
  // Admin Delete Session
  adminDeleteSessionDirectUse: () => '*🚨 Use this command directly in the bot number.*',
  adminDeleteSessionEmpty: () => '*❌ The sessions folder is empty or does not exist.*',
  adminDeleteSessionAlreadyEmpty: () => '❗ Sessions are empty, try again later I need them ‼️',
  adminDeleteSessionSuccess: () => '🔥 ${count} session files have been deleted! Thank you for clearing me out😼',
  adminDeleteSessionError: () => '❌ Deletion error!',
  
  // Admin Link QR
  adminLinkQRSuccess: () => 'Here is the QR Code for the group link!',
  adminLinkQRError: () => 'Error generating QR Code:',
  
  menuFooter: () => 'Choose a menu:',
  menuAdmin: () => '🛡️ Admin Menu',
  menuOwner: () => '👑 Owner Menu',
  menuSecurity: () => '🚨 Security Menu',
  menuGroup: () => '👥 Group Menu',
  menuAI: () => '🤖 AI Menu',
  
  // Menu commands
  staffCommand: () => 'staff',
  hegemoniaCommand: () => 'hegemony',
  candidatesCommand: () => 'candidates',
  installCommand: () => 'install',
  guideCommand: () => 'guide',
  channelsCommand: () => 'channels',
  systemCommand: () => 'system',
  faqCommand: () => 'FAQ',
  pingCommand: () => 'ping',
  reportCommand: () => 'report',
  suggestCommand: () => 'suggest',
  newsCommand: () => 'news',
  
  // Menu labels
  versionLabel: () => 'VERSION',
  collabLabel: () => 'COLLAB: ONE PIECE',
  usersLabel: () => 'USERS',
  
  // Event system
  eventName: () => 'ChatUnity Event',
  eventDescription: () => 'Join our event!',
  eventLocationName: () => 'Event venue',
  
  // AI Image generation
  aiImgHelp: () => 'Please write a description to generate the image.',
  wordleWin: 'Congratulations! You guessed the word in {attempts} attempts! 🎉',
  wordleLose: 'You ran out of attempts! The word was: {word} 😢',
  aiImgProcessing: () => '> CREATING IMAGE ...🔥',
  aiImgError: () => '❌ Error generating image.',
  aiImgSuccess: () => '✅ Image generated successfully!',
  
  // System messages
  botStarted: () => "🤖 ChatUnity Bot started successfully!",
  botStopped: () => "🤖 ChatUnity Bot stopped",
  connectionLost: () => "📡 Connection lost, reconnecting...",
  connectionRestored: () => "📡 Connection restored!",
  
  // Common errors
  networkError: () => "🌐 Network error, please try again later",
  serverError: () => "🔧 Server error, please try again later",
  unknownError: () => "❓ Unknown error",
  
  // Confirmation messages
  confirmAction: () => "❓ Are you sure you want to continue? Reply with 'yes' or 'no'",
  actionCancelled: () => "❌ Action cancelled",
  actionConfirmed: () => "✅ Action confirmed",
  
  // Download system
  downloadStarted: () => "⬇️ Download started...",
  downloadCompleted: () => "✅ Download completed!",
  downloadFailed: () => "❌ Download failed",
  
  // Sticker system
  stickerCreated: () => "🎨 Sticker created successfully!",
  stickerFailed: () => "❌ Unable to create sticker",
  
  // Music system
  musicNotFound: () => "🎵 Music not found",
  musicDownloading: () => "🎵 Downloading music...",
  musicReady: () => "🎵 Music ready!",
  
  // Pin message system
  pinReplyToMessage: () => "⚠️ Reply to a message to pin it.",
  pin1Day: () => "⏳ 1 Day",
  pin7Days: () => "⏳ 7 Days",
  pin30Days: () => "⏳ 30 Days",
  pinChooseDuration: () => "Choose how long you want to pin the message:",
  pinNoMessageQueued: () => "❌ No message to pin. First use the pin command by replying to a message.",
  pinError: () => "❌ Error pinning the message.",
  unpinReplyToMessage: (params) => `⚠️ Reply to a message to ${params?.action || 'perform the action'}.`,
  unpinAction: () => "remove it from pinned",
  executeAction: () => "perform the action",
  commandError: () => "❌ Error executing the command.",
  
  // Profile picture system
  profilePicBotError: () => "🚫 Cannot get bot's profile picture.",
  profilePicCaption: () => "📸",
  profilePicNotFound: (params) => `@${params?.user || 'user'} doesn't have a profile picture 🚫`,
  
  // Italian numbers auto-accept system
  adminOnlyCommand: () => "*Only admins can use this command*",
  botAdminRequired: () => "*Bot must be admin to use this function*",
  italianNumbersDisabled: () => "*❌ Italian numbers auto-accept disabled*",
  italianNumbersEnabled: () => "*✅ Italian numbers auto-accept enabled*\n\nItalian numbers (39) will be automatically accepted, others rejected",
  
  // Reject requests system
  groupOnlyCommand: () => "This command is only used in groups.",
  botAdminRequiredReject: () => "I must be admin to reject requests.",
  noRequestsToReject: () => "There are no requests to reject.",
  noRequestsWithPrefix: (params) => `No requests with prefix +${params?.prefix || ''}.`,
  noRequestsRejected: () => "No requests rejected.",
  requestsRejectedSuccess: (params) => `❌ Rejected ${params?.count || 0} requests successfully${params?.prefix ? ` with prefix +${params.prefix}` : ""}.`,
  rejectRequestsError: () => "Error while rejecting requests.",
  
  // Sport selection system
  sportFootball: () => "⚽ Football",
  sportBasket: () => "🏀 Basketball",
  sportTennis: () => "🎾 Tennis",
  sportFormula1: () => "🏎️ Formula 1",
  sportMMA: () => "🥊 MMA",
  sportCycling: () => "🚴‍♂️ Cycling",
  chooseSportMessage: () => "📌 *Choose the sport you want to follow to receive personalized news:*",
  chooseSportFooter: () => "💡 You can change it anytime",
  
  // Hide tag system
  tagBy: () => "Tag by",
  tagError: () => "Tag error:",
  
  // File owner system
  fileNameRequired: () => "⚠️ You must specify the file name to create. Ex: `.file name.txt`",
  fileAlreadyExists: (params) => `⚠️ The file "${params?.fileName || 'file'}" already exists.`,
  fileCreationError: (params) => `❌ Error creating file: ${params?.error || 'unknown error'}`,
  fileCreatedSuccess: (params) => `✅ The file "${params?.fileName || 'file'}" has been created successfully in the bot folder.`,
  
  // AI Alya system
  alyaWhatDoYouWant: () => "What do you want?",
  alyaNoValidResponse: () => "I didn't receive a valid response from the API. Try again later.",
  alyaError: (params) => `An error occurred. Please try again later.\n\n#report ${params?.command || 'command'}\n\n${wm}`,
  
  // Group list system
  groupListTitle: (params) => `GROUP LIST OF ${params?.botName || 'Bot'}`,
  totalGroups: () => "Total Groups",
  nameNotAvailable: () => "Name not available",
  notAdmin: () => "Not admin",
  error: () => "Error",
  
  // Group join system
  invalidLink: () => "Invalid link!",
  joiningGroup: () => "😎 Wait 3 seconds, I'm joining the group",
  groupJoinGreeting: (params) => `Hello friends of ${params?.groupName || 'group'}\n\nMy commands can be viewed in ${params?.prefix || '.'}menu`,
  botAlreadyInGroup: () => "Bot is already in the group",
  
  // Script on/off system
  scriptNameRequired: () => "Write the script name, example: .offscript info",
  fileNotFound: () => "File not found.",
  scriptAlreadyOff: () => "Script is already off.",
  scriptTurnedOff: (params) => `Script ${params?.file || 'file'} turned off.`,
  scriptTurnedOn: (params) => `Script ${params?.file || 'file'} reactivated.`,
  
  // Server/command system
  serverCommandRequired: () => "⚠️ You must specify the command to execute. Ex: `.server ls -la`",
  executingCommand: (params) => `🔄 Executing command: "${params?.cmd || 'command'}"`,
  executionError: (params) => `❌ Error during execution: ${params?.error || 'unknown error'}`,
  output: () => "Output",
  errorsWarnings: () => "Errors/Warnings",
  commandExecutedNoOutput: () => "✅ Command executed without output",
  outputTruncated: () => "... (output truncated)",
  
  // Zip/backup system
  zipUsage: (params) => `⚠️ Use: ${params?.command || 'command'} <archive_name>`,
  creatingBackup: () => "🔄 Creating backup in progress...",
  backupCreatedSending: (params) => `✅ Backup ${params?.archiveName || 'archive'}.zip created. Sending...`,
  compressionError: (params) => `❌ Error during compression: ${params?.error || 'unknown error'}`,
  
  // Antispam system
  spamDetectedModifying: () => "Spam detected! Modifying group settings...",
  onlyAdminsCanSend: () => "Only administrators can send messages.",
  userNotFoundOrRemoved: () => "User not found or already removed.",
  userIsAdminNotRemoved: () => "User is an administrator and will not be removed.",
  allSpamMessagesDeleted: () => "All spam messages have been deleted.",
  chatReactivatedForAll: () => "Chat reactivated for all members.",
  antispamDetected: () => "*antispam by Origin detected*",
  antispamNotificationSent: () => "Antispam notification message sent.",
  spamCounterReset: () => "Spam counter for user reset.",
  spamHandlingError: () => "Error during spam handling:",
  botNotAdminOrRestrictionDisabled: () => "Bot is not admin or restriction is disabled. Cannot perform operation.",
  spamCounterResetTimeout: () => "Spam counter for user reset after timeout.",
  timeoutExpiredReset: () => "Timeout expired. Reset spam counter for user.",
  alcolPhraseHigh: () => "🍾 Amico se hai bisogno di parlare io ci sono..",
  alcolPhraseMedium: () => "🥂 Beve in modo responsabile, o quasi...",
  alcolPhraseLow: () => "🚰 Totalmente sobrio, niente sbronze per oggi!",
  alcolTestHeader: () => "『💬』 ══ •⊰✰⊱• ══ 『💬』",
  alcolTestTitle: () => "MOMENTO DEL TEST DELL! 🍷",
  alcolTestDefaultUser: () => "Tu",
  alcolTestLevel: (params) => `ha un tasso alcolemico del ${params?.width ?? 0}%! 🍷`,
  alcolTestFooter: () => "『💬』 ══ •⊰✰⊱• ══ 『💬』"
};
