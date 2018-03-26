const Discord = require("discord.js");
const client = new Discord.Client();//actual bot
const config = require("./config.json");
const fs = require("fs"); //API for interacting with file system





client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);// message showing bot is online
  client.user.setActivity(`type *help`);
});

client.on("message", async message => {

  //remove command prefix, store command, store array of args
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Exit if command doesn't start with prefix or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

//Token is in hidden config file
client.login(config.token);