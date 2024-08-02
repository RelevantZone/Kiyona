import { Client, Events, Message } from "discord.js";

export class EventHandler {
    public RegisterEvents(client: Client) {
        client.once(Events.ClientReady, this.OnClientReady.bind(this))
        client.on(Events.MessageCreate, this.OnMessageCreate.bind(this))
    }

    public UnregisterEvents(client: Client) {
        // TODO:
    }

    protected OnClientReady(client: Client) {
        console.log(client)
    }

    protected OnMessageCreate(message: Message) {
        if (! message.inGuild()) return; // If message was outside of Server
        if (message.author.bot) return; // If messenger is a bot user

        const command = message.content.split(/ +/g).shift();
        
    }
}