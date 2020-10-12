module.exports = {
  name: 'join',
  description: 'Join bot channel voice',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    if (!message.member.voice.channel) {
      message.channel.send('¡Usted no esta conectado a ningun canal de voz!');
      return;
    }
    connection.setCon = message.member.voice.channel.join();
  },
};
