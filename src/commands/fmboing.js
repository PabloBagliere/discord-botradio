module.exports = {
  name: 'fmboing',
  description: 'sounds FMBoing',
  guildOnly: true,
  aliases: ['boing'],
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
      connection.setDispatcher = con.play('http://200.58.106.247:8626/');
    });
    message.channel.send(radio(this.name));
  },
};
