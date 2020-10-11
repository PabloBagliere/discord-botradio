const Discord = require('discord.js');
const messageError = require('./lib/messageEmbed');
const client = new Discord.Client();

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
let connection;
let dispatcher;
let prefix = '.';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.content === prefix + 'join') {
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
    } else {
      message.channel.send(
        messageError('¡Usted no esta conectado a ningun canal de voz!')
      );
    }
  }
  if (message.content === prefix + 'disconnect') {
    if (message.member.voice.channel) {
      connection.disconnect();
      connection = null;
    } else {
      message.channel.send(
        messageError(
          '¡Usted no esta conectado a ningun canal de voz o al canal donde este el bot!'
        )
      );
    }
  }
  if (message.content === prefix + 'fmvida') {
    if (connection != null) {
      dispatcher = connection.play(
        'http://fmvida.radio.rosario3.com:8000/fmvida.mp3'
      );
    } else {
      console.log('Error no esta el bot conectado');
    }
  }
  if (message.content === prefix + 'fmboing') {
    if (connection != null) {
      dispatcher = connection.play('http://200.58.106.247:8626/');
    } else {
      console.log('Error no esta el bot conectado');
    }
  }
});

client.login(DISCORD_TOKEN);
