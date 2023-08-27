const { Client, Collection, GatewayIntentBits, Partials, ActivityType } = require('discord.js');

const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;

const client = new Client({
    intents: [ Guilds, GuildMembers, GuildMessages, MessageContent ],
    partials: [ User, Message, GuildMember, ThreadMember, Channel ],
});

client.once('ready', () => {
    console.log(`Bot jest online!`)
    client.user.setActivity("DiscordJS v14", { type: ActivityType.Watching })
})

client.commands = new Collection();

client.config = require('./config.json');

client.login(client.config.token);