module.exports = {
  name: 'volumen',
  description: 'Change bot volume',
  execute(message, args) {
    const { connection } = require('../lib/variablesglobales');
    if (!message.member.voice.channel) {
      message.channel.send('¡Usted no esta conectado a ningun canal de voz!');
      return;
    }
    if (!args.length) {
      message.channel.send(`El volumen actual es de ${connection.getVolumen}`);
      message.channel.send(
        `Si quieres cambiarlo tiene que pasar en forma de numero del 0 al 100`
      );
      return;
    }
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
      return message.channel.send('El valor ingresdo no es un numero');
    }
    if (amount < 0 || amount > 100) {
      return message.channel.send(
        'El numero ingresado es mayor a 100 o menor que 0'
      );
    }
    connection.getDispatcher.setVolume(amount / 100);
    connection.setVolumen = amount;
    return message.channel.send(
      `El volumen se a cambiado a ${connection.getVolumen}`
    );
  },
};
