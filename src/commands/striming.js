module.exports = {
  name: 'striming',
  description: 'sounds striming',
  guildOnly: true,
  aliases: ['vivo', 's'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    const ytdl = require('ytdl-core');
    if (connection.getCon === null) {
      message.channel.send(
        '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
      );
      return;
    }
    connection.getCon.then((con) => {
      connection.setDispatcher = con.play(
        ytdl('https://www.youtube.com/watch?v=9SldRxTEb2U', {
          filter: 'audioonly',
          begin: Date.now(),
        })
      );
    });
  },
};
