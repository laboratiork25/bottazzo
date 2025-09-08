import PluginUpdater from './lib/plugin-updater.js'

// Script to update all plugins for multilingual support
async function main() {
    const updater = new PluginUpdater()
    
    console.log('🚀 ChatUnity Bot - Plugin Multilingual Update')
    console.log('=' .repeat(50))
    
    // Update all plugins
    await updater.updateAllPlugins()
    
    console.log('\n🎉 Plugin update completed!')
    console.log('The bot now supports Italian and English languages.')
    console.log('Users can switch languages using: .lingua it or .lingua en')
}

// Run the update
main().catch(console.error)
