module.exports = {
  name: 'join',
  description: 'Join bot channel voice',
  guildOnly: true,
  aliases: ['j'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    const { join } = require('../lib/messageEmbed');
    if (!message.member.voice.channel) {
      message.channel.send('¡Usted no esta conectado a ningun canal de voz!');
      return;
    }
    connection.setCon = message.member.voice.channel.join();
    message.channel.send(join(message, 'conection'));
  },
};
