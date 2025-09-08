import '../lib/language.js';

// Pre-validation for mute command to show a clear usage message when input is incomplete
// This runs before the main gp-muta.js thanks to filename ordering
const before = async function (m, { conn }) {
  try {
    if (typeof m.text !== 'string') return false;
    const prefixes = conn.prefix || global.prefix;

    // Extract prefix match
    let usedPrefix = '';
    if (prefixes instanceof RegExp) {
      const mres = prefixes.exec(m.text);
      if (!mres) return false;
      usedPrefix = mres[0] || '';
    } else {
      const list = Array.isArray(prefixes) ? prefixes : [prefixes];
      usedPrefix = list.find(p => (p instanceof RegExp ? p.test(m.text) : typeof p === 'string' && m.text.startsWith(p))) || '';
      if (!usedPrefix) return false;
    }

    const noPrefix = m.text.slice(usedPrefix.length).trim();
    if (!noPrefix) return false;
    const [cmdRaw, ...rest] = noPrefix.split(/\s+/);
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;

    // Canonicalize via language manager (group language takes precedence)
    const canonical = global.languageManager ? global.languageManager.canonicalizeCommand((cmdRaw || '').toLowerCase(), userId, groupId) : (cmdRaw || '').toLowerCase();

    // Only act for the mute command (canonical 'muta')
    if (canonical !== 'muta') return false;

    // Determine if target is provided (mention or reply)
    const hasMention = Array.isArray(m.mentionedJid) && m.mentionedJid.length > 0;
    const isReply = !!m.quoted;

    // If neither mention nor reply is provided, show localized usage and stop further processing
    if (!hasMention && !isReply) {
      const text = global.t('muteUsage', userId, groupId, { prefix: usedPrefix });
      await conn.reply(m.chat, text, m);
      // Mark to stop processing subsequent plugins for this message
      m.__stopProcessing = true;
      return true; // prevent main plugin from running
    }

    return false;
  } catch (e) {
    // Fail open to avoid blocking the main plugin if something goes wrong
    return false;
  }
};

export default {
  before
};
