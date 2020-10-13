module.exports = {
  name: 'fmlos40',
  description: 'sounds Los 40',
  guildOnly: true,
  aliases: ['40', 'l40'],
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
        'https://18433.live.streamtheworld.com/LOS40_ARGENTINAAAC.aac'
      );
    });
    message.channel.send(radio(this.name));
  },
};
