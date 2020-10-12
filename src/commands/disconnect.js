module.exports = {
  name: 'disconnect',
  description: 'Disconnect bot channel voice',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    if (connection.getCon === null || !message.member.voice.channel) {
      message.channel.send(
        '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
      );
      return;
    }
    connection.getCon.then((con) => {
      con.disconnect();
      connection.setCon = null;
      connection.setDispatcher = null;
    });
    return;
  },
};
