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

module.exports = messageError;
