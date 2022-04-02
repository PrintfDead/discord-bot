import { Client, ClientOptions, Collection, CommandInteraction } from "discord.js";
import { Handler } from './Handler';
import { SlashCommandBuilder } from '@discordjs/builders';

type Data = {
    token: string;
    id: string;
}

type CommandOptions = {
    data: SlashCommandBuilder;
    code: (client: BotClient, interaction: CommandInteraction) => any;
}

type EventOptions = {
    name: string;
    code: (client: BotClient, ...args: any) => any;
    once?: boolean;
}

export class BotClient extends Client {
    data: Data;
    constructor(options: ClientOptions, opts: Data) {
        super(options);

        this.data = opts;
        Handler.SlashLoad();
        Handler.SlashAdd(this);
        Handler.EventLoad(this);

        this.login("OTU5Njg3MjM3NzIzODg1NTgw.YkfgYw.Sx8Nv-D1Ig9rlHv2DKttCNgJWGU");
    }
}

export class Command {
    options: CommandOptions;
    constructor(options: CommandOptions) {
        this.options = options;
    }
}

export class Event {
    options: EventOptions;
    constructor(options: EventOptions) {
        this.options = options;
    } 
}