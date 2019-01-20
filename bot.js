const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*"
client.on('ready', () => {
  client.user.setGame('MonsTis','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__
╔[❖════════════❖]╗
             Prefix = ' * '
╚[❖════════════❖]╝
╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
 ❖ *kick <mention > ➾ kick member from server
 ❖ *clear ➾ clear chat ( not ready yet fixing)
 
 ❖ *mute < mention > ➾ mute member
 ❖ *unmute <mention> ➾ unmute member
 ❖ *bc <message> ➾ message all members in server
╔[❖════════════❖]╗
            General  Commands

❖ *uptime ➾ to see uptime
❖ *link ➾ server invite link
❖ *help-en ➾ help by english
❖ *server ➾ server informations 
More....
╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

`);

    }
});


client.on('message', message => {
                   var prefix = "*"
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 /*let b5bzlog = client.channels.find("name", "5bz-log");
                 if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });
			   
			   
			   
			   





















client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو كان لتسلية راح تتعاقب")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });///////////////مال كودز
  
  
  
  client.on("message", message => {
    var prefix = "*"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });



client.guilds.get('ID SERVER').roles.find("name", "هنا اسم الرتبة").setColor("RANDOM");
    }
    setInterval(rainbow, 3000);//rainbow delay time (ms)
  })//////////Mal TEAM



``client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نصابين')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "By Storm"
        }
      }}).then(msg => {msg.delete(4000)});
                          }
						  




















client.on("message", message => {
    const prefix = "*"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  var prefix = ("*")/////////change the prefix 
client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {//////by O҉Z҉X҉
    let uptime = client.uptime;
 
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) { /// Mal , Codes //// O҉Z҉X҉ 
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
 
    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
 
 
}
});


lient.on('message', message => {
    if(message.content == '*member') {///// غير البرفكس 
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)  
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true)
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)        
         message.channel.send({embed}); /// Mal , Codes //// O҉Z҉X҉ 
 
    }
  });

var prefix =("*")
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else { /// Mal , Codes //// O҉Z҉X҉ 
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



var prefix =("*")
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) { /// Mal , Codes //// O҉Z҉X҉
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())/// Mal , Codes //// O҉Z҉X҉
 
      msg.channel.send({embed:embed});/// Mal , Codes //// O҉Z҉X҉
    }
  });/// Mal , Codes //// O҉Z҉X҉
  
  
  
  
  


client.on('guildCreate', guild => {
   
  client.users.get("419474365248438282")
    const MAL&OTOZX = new Discord.RichEmbed()
    .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
    .setDescription(`**
  Server name: __${guild.name}__
  Server id: __${guild.id}__
  Server owner: __${guild.owner}__
  Member Count: __${guild.memberCount}__
  Servers Counter : __${client.guilds.size}__**`)/// Mal , Codes //// OTOZX
          .setColor('#36393e')
          .setFooter('mal' , client.user.avatarURL)
         client.users.get("419474365248438282").send({MAL&OTOZX});
})
 
client.on('guildDelete', guild => {
   
  client.users.get("419474365248438282")
 
  const MAL&OTOZX = new Discord.RichEmbed()
  .setAuthor(`بوتك خرج من سيرفر للاسف ❎`)
  .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
         .setColor('#36393e')
         .setFooter('mal' , client.user.avatarURL)
         client.users.get("419474365248438282").send({MAL&OTOZX});
 
});


client.on('message', message => {
            if (message.content.startsWith("قوانين")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});




client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("517018286492483586");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("ا535809988866605067");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("517018286492483586");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client();
let ar = JSON.parse(fs.readFileSync(`./Data/AutoRole.json`, `utf8`))

const prefix = "*";//البريفكس

client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var whitelisted = ""// ايديك
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }

if(message.content.startsWith(prefix + `autorole`)) {
         if(whitelisted.includes(sender.id)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/setrole [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   } 
         }
  }
 
if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `

State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


})



client.on('ready', () => {
  console.log(`AutoRole Code Started By Friends Team`);
    client.user.setStatus("dnd")
});


client.on('message', ra3d => {
var prefix = "*";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });








client.on('message', function(message) {
    if (message.content == "*clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});
	



client.on('message', message => {

    if (message.content === "*mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "*umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});






client.on('message', message => {
const prefix = "*";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => { 
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, 
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); 
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1); 
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});


client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });
  
  
    
  
  
  client.on('message', message => {
     if (message.content === "*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => {
    if (message.content === '*roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** حبيبي هههه لا تعيدها **`)
    }
});


client.on('message', msg => {
  if (msg.content === 'مين يلعب؟') {
    msg.reply('انا بدي العب');
  }
});






































client.login(process.env.BOT_TOKEN);



