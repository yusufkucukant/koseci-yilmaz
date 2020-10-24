const { token } = require("../settings/credentials.json");
const Discord = require("discord.js");
const config = require("../settings/config.json");
const client = new Discord.Client();
module.exports = {
  ready: bot => {
    bot.login(config.token);
    bot.on("ready", () => {
      bot.user.setActivity("",{ type: "" });
      bot.user.setStatus("");
      console.log(
        `Fellow Online`
      );
    });
  }
}; 
