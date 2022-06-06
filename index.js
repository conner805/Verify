require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in`));

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '886046338259771452') //change the channel id 
        await message.delete();
    if(message.content.toLowerCase() === "!verify" && message.channel.id === '886046338259771452') //change the channel id
        {
            await message.delete().catch(err => console.log(err));
            const role = message.guild.roles.cache.get('561368011202625537'); //change the role id
            if(role) {
                try {
                    await message.member.roles.add(role);
                    console.log("Role added!");
                }
                catch(err) {
                    console.log(err);
            }
        }
    }
});

client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});