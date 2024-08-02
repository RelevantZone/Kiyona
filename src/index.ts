import { Client as DiscordClient, Events, GatewayIntentBits } from "discord.js";
import { EventHandler } from "./handlers/EventHandlers";

const Intents = [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
]

const EventHandlers = new EventHandler()
const Client = new DiscordClient({ intents: Intents })
EventHandlers.RegisterEvents(Client)


