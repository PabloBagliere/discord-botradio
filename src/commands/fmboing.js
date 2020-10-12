module.exports = {
  name: 'fmboing',
  description: 'sounds FMBoing',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    if (connection.getCon === null) {
      message.channel.send(
        '¡El bot no esta conectado a ningun canal de voz o Usted no esta conectado a ningun canal de voz!'
      );
      return;
    }
    connection.getCon.then((con) => {
      connection.setDispatcher = con.play('http://200.58.106.247:8626/');
    });
  },
};