const utils = require('../global/utils');
const config = require('../settings/config.json');

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('Bu komutu kullanabilmek için `Üyeleri Sustur` iznine sahip olmalısınız!');
    let queue = bot.queue.get(message.guild.id);
    if (!queue) return [message.delete(), utils.timed_msg('⚠ Müzik Çalmıyor!', 5000)];
    
    if (!args[0]) return [message.delete(), message.channel.send(`🎵 Volume !: ${queue.volume}/100`)];
    if (isNaN(args[0])) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, 0 ile 100 arasında bir sayı girin`), 5000)];
    if (args[0] < 0 || args[0] > 100) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, 0 ile 100 arasında bir sayı girin!`), 5000)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎵 Ses Seviyesi Değişti: ${queue.volume}/100`);
};

module.exports.help = {
    name: 'volume',
    aliases: ['seseviye','ses']
};