export { ApplicationCommandOptionType as ArgumentType } from "discord.js";

export class Command {
    #commandName: string;
    #description: string;
    #cooldown: any;

    static new(commandName: string) {
        return new Command(commandName)
    }

    public constructor(commandName?: string) {
        if (commandName) {
            this.#commandName = commandName
        }
    }

    public setName(commandName: string) {
        this.#commandName = commandName;
        return this;
    }

    public setDescription(description: string) {
        this.#description = description;
        return this;
    }

    public setCooldownUsage(duration: number) {
        this.#cooldown = { duration, }
    }

    public setCooldownType(type: 'global' | 'guild' | 'user') {

    }

    public toJSON(): CommandMetadata {
        return {
            commandName: this.#commandName,
            description: this.#description,
            cooldown: undefined // TODO:
        }
    }
}

export type CommandMetadata =
{
    commandName: string;
    description: string;
    cooldown?: CooldownMetadata;

}

export type CooldownMetadata = 
{
    duration: number;
    type: 'global' | 'guild' | 'user'
}