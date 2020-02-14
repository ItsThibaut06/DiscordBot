const ytdl = require("ytdl.core");

module.exports.run = (bot, message, args) => {
   
   if(!message.member.voiceChannel) return message.channel.send("Je zit niet in een spraakkanaal!");

   if(message.guild.me.voiceChannel) return message.channel.send("Join mijn spraakkanaal!");

   if(!args[0]) return message.channel.send("Geef een URL link op!");

   var validate = await ytdl.validateURL(args[0]);

   if(!validate) return message.channel.send("Geef een juiste URL op!");

   var info = await ytdl.getInfo(args[0]);

   var options = { seek: 0, volume: 1};

   var voiceConnection = message.member.voiceChannel.join()
   .than(voiceChannel => {
       var stream = ytdl(args[0], { filter: "audioonly"});
       var streamDispatch = voiceChannel.playStream(stream, options);
   })
   .catch(console.error);

   message.channel.send(`Nu aan het speler ${info.title}`)

}

module.exports.help = {
    name: 'play'
};