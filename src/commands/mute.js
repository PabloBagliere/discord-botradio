module.exports = {
  name: 'mute',
  description: 'mute bot',
  guildOnly: true,
  aliases: ['m'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    connection.getDispatcher.setVolume(0);
    connection.setVolumen = 0;
    return message.channel.send(`Se muteo el bot en general`);
  },
};
