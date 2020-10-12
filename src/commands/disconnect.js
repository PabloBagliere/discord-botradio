module.exports = {
  name: 'disconnect',
  description: 'Disconnect bot channel voice',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    const messageError = require('../lib/messageEmbed');
    if (connection.getCon === null || !message.member.voice.channel) {
      message.channel.send(
        messageError(
          '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
        )
      );
      return;
    }
    connection.getCon.then((con) => {
      con.disconnect();
    });
    return;
  },
};
