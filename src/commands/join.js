module.exports = {
  name: 'join',
  description: 'Join bot channel voice',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    const messageError = require('../lib/messageEmbed');
    if (!message.member.voice.channel) {
      message.channel.send(
        messageError('¡Usted no esta conectado a ningun canal de voz!')
      );
      return;
    }
    connection.setCon = message.member.voice.channel.join();
  },
};
