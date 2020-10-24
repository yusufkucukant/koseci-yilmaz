const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **!küfüraç**.\nbotu davet etmek için **!davet**')
      .addField('** !Komutlar (12)**', `herkesin kullanabileceği standart komutlar. \n` +  '`bot bilgi`, `davet`, `gold`, `webpanel`, `sunucupp`, `profil`, `kredim`, `p-Market`, `p-Menü`, `ping`, `puanım`, `ayarlar`,`yılbaşı`')
      .addField('** !Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`kralol`, `maymunol`, `yılanol`, `adamol`, `kediol`, `aşk`, `token`, `tokat`')
      .addField('** !Moderasyon (12)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`küfür`, `reklam`, `link engel`, `kick`,`reklam isim ban`,`otorol`,`sayaç`,`ban koruma sistemi`,`oto cevap`,`mute-sistemi`,`anti-raid-bot-sistemi`,`sunucu-panel`')
      .addField('** !Moderasyon2 (12)**',`yetkililer için moderasyon komutları bölüm . \n` + '`sil`,`reklam-taraması`,`resimli hg-bb`,`sunucutanıt`,`oto bot silici`,`ultra sohbet temizleyici`,`slowmode`,`tag Sistemi`,`rol-sistemi`,`geçici-oda`,`kayıt sistemi`,`!erkek kayıt`,`emojiler`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};