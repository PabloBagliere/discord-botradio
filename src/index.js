const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
let connection;
let prefix = '.';
// http://200.58.106.247:8626/
// http://fmvida.radio.rosario3.com:8000/fmvida.mp3
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (!message.guild) return;

  if (message.content === prefix + 'join') {
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
      connection.play('http://200.58.106.247:8626/');
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content == prefix + 'disconenct') {
    if (message.member.voice.channel) {
      connection.disconnect();
    }
  }
});

client.login(DISCORD_TOKEN);
