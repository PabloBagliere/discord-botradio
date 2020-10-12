module.exports = {
  name: 'mute',
  description: 'mute bot',
  execute(message, args) {
    if (!message.member.voice.channel || connection.getDispatcher === null) {
      message.channel.send('¡Usted no esta conectado a ningun canal de voz!');
      return;
    }
    const { connection } = require('../lib/variablesglobales');
    connection.getDispatcher.setVolume(0);
    connection.setVolumen = 0;
    return message.channel.send(`Se muteo el bot en general`);
  },
};
