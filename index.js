const Discord = require("discord.js");
const client = new Discord.Client()
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('');
  client.user.setActivity(`-help`);
});
client.login("OTIyODEwODA5MTI4NzM4ODY2.YcG4iQ.ZmVNU1NywpPrA8wY5eDwPCb8zzA")