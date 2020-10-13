module.exports = {
  name: 'radio',
  description: 'play radio',
  usage: '<radio>',
  guildOnly: true,
  aliases: ['play', 'r'],
  execute(message, args) {
    const { connection } = require('../lib/connection');
    const { radio } = require('../lib/messageEmbed');
    const { radios } = require('../lib/radios');
    if (connection.getCon === null) {
      return message.channel.send(
        '¡El bot no esta conectado a ningun canal de voz'
      );
    }
    if (!args.length) {
      return message.channel.send(
        `Se debe pasar como argumente alguna estacion de radio que alla disponible. A continuacion se los nombrare:
          * fmvida (Radio Vida FM 97.3)
          * fmlos40 (Radio los 40 FM 105.5)
          * fmmega (Radio Mega FM 98.3)
          * fmboing (Radio la Boing FM 97.3)
        `
      );
    }
    const estacion = args[0];
    if (
      estacion === 'fmvida' ||
      estacion === 'fmlos40' ||
      estacion === 'fmmega' ||
      estacion === 'fmboing'
    ) {
      const RADIO = radios.getRadio(estacion);
      return connection.getCon.then((con) => {
        connection.setDispatcher = con.play(RADIO.url);
        message.channel.send(radio(RADIO));
      });
    }
    return message.channel
      .send(`Se debe pasar como argumente alguna estacion de radio que alla disponible. A continuacion se los nombrare:
    * fmvida (Radio Vida FM 97.3)
    * fmlos40 (Radio los 40 FM 105.5)
    * fmmega (Radio Mega FM 98.3)
    * fmboing (Radio la Boing FM 97.3)
  `);
  },
};
