module.exports = {
  name: 'disconnect',
  description: 'Disconnect bot channel voice',
  guildOnly: true,
  aliases: ['d'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    const { join } = require('../lib/messageEmbed');
    if (connection.getCon === null) {
      message.channel.send('¡El bot no esta conectado a ningun canal de voz!');
      return;
    }
    connection.getCon.then((con) => {
      con.disconnect();
      connection.setCon = null;
      connection.setDispatcher = null;
    });
    message.channel.send(join(message, 'disconnection'));
  },
};
