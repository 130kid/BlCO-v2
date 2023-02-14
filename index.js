const { Client, MessageManager, DiscordAPIError, MessageEmbed, TextChannel, CommandInteractionOptionResolver } = require("discord.js-selfbot-v13");
const dotenv = require('dotenv');
const cp = require('child_process');
const chalk = require('chalk');
const fs = require('fs');
const figlet = require('figlet');
const { channel } = require("diagnostics_channel");
const AllowedUsers = [
    '1074908891986542664',
    '1074982361067946035'
];
require('dotenv').config();
const client = new Client({
    checkUpdate: false
});



client.on('ready', async () => {
    console.log(
        chalk.magenta(
            figlet.textSync('COBRA-SELF', {horizontalLayout: 'full'})
        )
    );
    console.log(chalk.yellow('===COMMAND LIST==='));
    console.log(chalk.green('YOUR TOKEN : ' + process.env.TOKEN))
})



client.on('message', async(message) => {

    if (message.content === "!spam dm" && AllowedUsers.includes(message.author.id)){
        message.delete();
        cp.exec("DM.py");

    }

    if (message.content === "!spam channel" && AllowedUsers.includes(message.author.id)){
        message.delete();
        cp.exec("spam.py");

    }

    if (message.content === "!dc all" && AllowedUsers.includes(message.author.id)){
        message.delete();
        cp.exec("dc.py");

    }

    if (message.content === "!ban all" && AllowedUsers.includes(message.author.id)){
        message.delete();
        cp.exec("ban_all.py");

    }
    


    if (message.content === "!spam mention" && AllowedUsers.includes(message.author.id)){//멘션테러
        message.delete();
        fs.writeFileSync("message.txt","", {flag:'w+'});
        for(var i = 0; i<1; i++){
            message.guild.members.cache.forEach(user => {
                fs.writeFileSync("message.txt", "<@"+user.id+">", {flag:"a+"});
            });
            fs.readFile("message.txt", 'utf8',(err, data) =>{
                message.channel.send(data)
            })
        }
    }
    
    if (message.content === "!whoami"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        message.channel.send("`User's Name : " + message.author.username + "#" + message.author.discriminator +  '`');
        message.channel.send("`User's ID : " + message.author.id + '`');
        message.channel.send("**User's Icon :** " + message.author.avatarURL());
    }
    
    if (message.content === "!spam start"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        for(let i = 1; i<=30; i++){
            message.channel.send(process.env.MESSAGE + " | ** " + i+"/"+"30**");
        }
    }
    if (message.content == "!cc text"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        for(let i = 0; i<10; i++){
            try{
                message.guild.channels.create("FUCKzzz",{
                    type:0
                })
                console.log(chalk.green("[+] Success"));
            }
            catch{
                console.log(chalk.red("[-] Failed"));
            }
        }
    }
    if (message.content == "!cc voice"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        for(let i = 0; i<10; i++){
            try{
                message.guild.channels.create("FUCKzzz",{
                    type:2
                })
                console.log(chalk.green("[+] Success"))
            }
            catch{
                console.log(chalk.red("[-] Failed"))
            }
        }
    }
    if (message.content == "!cc category"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        for(let i = 0; i<10; i++){
            try{
                message.guild.channels.create("FUCKzzz",{
                    type:4
                })
                console.log(chalk.green("[+] Success"))
            }
            catch{
                console.log(chalk.red("[-] Failed"))
            }
        }
    }
    if (message.content == "!scrap"&& AllowedUsers.includes(message.author.id)){
        message.delete();
        fs.writeFileSync("members.txt", "", {flag:"w+"});
        fs.writeFileSync("channels.txt", "", {flag:"w+"});
        message.guild.members.cache.forEach(member => {
            console.log(member.id);
            fs.writeFileSync("members.txt",member.id + "\n", {flag:"a+"},err => {
                if (err) {
                    console.error(err)
                    return  
                }
                console.log(chalk.yellow(member.id))
            })
        })
        message.guild.channels.cache.forEach(channel => {
            console.log(chalk.yellow(channel.id));
            fs.writeFileSync("channels.txt",channel.id + "\n", {flag:"a+"},err => {
                if (err) {
                    console.error(err)
                    return  
                }
            })
        })
        fs.writeFileSync("guild.txt", message.guild.id, {flag:'w+'});
        console.log(chalk.yellow(message.guild.id))
    }

})

client.login(process.env.TOKEN)
