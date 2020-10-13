module.exports = {
  name: 'fmmega',
  description: 'sounds Mega',
  guildOnly: true,
  aliases: ['mega'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    const { radio } = require('../lib/messageEmbed');
    if (connection.getCon === null) {
      message.channel.send(
        '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
      );
      return;
    }
    connection.getCon.then((con) => {
      connection.setDispatcher = con.play(
        'https://mega.stweb.tv/mega983/live/chunks.m3u8'
      );
    });
    message.channel.send(radio(this.name));
  },
};
