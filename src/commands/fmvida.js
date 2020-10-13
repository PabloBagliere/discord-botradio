module.exports = {
  name: 'fmvida',
  description: 'sounds FMVida',
  guildOnly: true,
  aliases: ['vida'],
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
        'http://fmvida.radio.rosario3.com:8000/fmvida.mp3'
      );
      message.channel.send(radio(this.name));
    });
  },
};
