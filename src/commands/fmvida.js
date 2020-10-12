module.exports = {
  name: 'fmvida',
  description: 'sounds FMVida',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    const messageError = require('../lib/messageEmbed');
    if (connection.getCon === null) {
      message.channel.send(
        messageError(
          '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
        )
      );
      return;
    }
    connection.getCon.then((con) => {
      connection.setDispatcher = con.play(
        'http://fmvida.radio.rosario3.com:8000/fmvida.mp3'
      );
    });
  },
};
