const Discord = require('discord.js');

const messageError = (error) => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Error:')
    .setAuthor(
      'BotRadio',
      'https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-7.png?ezimgfmt=rs:640x640/rscb2/ng:webp/ngcb2'
    )
    .setDescription(error);
  return msgEmbed;
};

const messageRadio = (r) => {
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Radio: ${r.name}`)
    .setThumbnail(r.image)
    .setDescription(
      `Usted esta escuchando ahora ${r.name} de la estacion ${r.estacion} `
    );
  return msgEmbed;
};

const messageConenction = (message, accion) => {
  let msgEmbed;
  switch (accion) {
    case 'conection':
      msgEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`BOT Conectado:`)
        .setThumbnail(
          'https://upload.wikimedia.org/wikipedia/commons/a/ac/Crystal_Project_success.png'
        )
        .setDescription(
          `Hola ${message.member} usted acaba de conectar al bot al canal ${message.member.voice.channel} desde el canal ${message.channel}`
        );
      break;
    case 'disconnection':
      msgEmbed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(`BOT desconectado:`)
        .setThumbnail(
          'https://upload.wikimedia.org/wikipedia/commons/0/0c/Crystal_Clear_action_exit.png'
        )
        .setDescription(
          `Hola ${message.member} usted acaba de desconectar al bot del canal ${message.member.voice.channel} desde el canal ${message.channel}`
        );
    default:
      break;
  }
  return msgEmbed;
};

exports.error = messageError;
exports.radio = messageRadio;
exports.join = messageConenction;
