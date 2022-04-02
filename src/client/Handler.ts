import fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { BotClient } from './ModClient';
import { Collection } from 'discord.js';

/**
 * @class Handler
 * @method SlashLoad static sube los slash commands a la api de discord
 * @method SlashAdd añade los slash commands a la coleccion de comandos
 * @method EventLoad carga los eventos
 */
export class Handler {
    public static async SlashLoad() {
        const commands: any[] = [];
        const slashFolder = fs.readdirSync(__dirname + `/..commands`);
        for (const folder of slashFolder) {
            const slashFiles = fs.readdirSync(__dirname + `/..commands/${folder}`);
            for (let file of slashFiles) {
                const command = import(`../commands/${file}`);
                command.then(c => {commands.push(c.default.options.data.toJSON())});
            }
        }

        const rest = new REST({ version: "9" }).setToken("")

        try {
            await rest.put(
                Routes.applicationCommands(""), {
                    body: commands
                }
            );
            console.log(`Slash commands loaded`);
        } catch (e) {
            console.error(e);
        }
    }

    public static async SlashAdd(client: any) {
        client.commands = new Collection();
        const slashFolder = fs.readdirSync(__dirname + `/..commands`);
        for (const folder of slashFolder) {
            const slashFiles = fs.readdirSync(__dirname + `/..commands/${folder}`);
            for (let file of slashFiles) {
                const command = import(`../commands/${folder}/${file}`);
                command.then(c => {
                    client.commands.set(c.default.options.data.name, c.default.options);
                })
            }
        } 
    }

    public static EventLoad(client: any) {
        const eventFiles = fs
            .readdirSync(__dirname + `/..events`)
            .filter((file: string) => file.endsWith('.js'));

        for (const file of eventFiles) {
            const event = import(__dirname + `/..events/${file}`).then(c => {
                if(c.default.once) {
                    client.once(c.default.options.name, (...args: any[]) => c.default.options.code(...args, client));
                } else {
                    // el default es porque hago un export default que en javascript se veria como exports.default
                    client.on(c.default.options.name, (...args: any[]) => c.default.options.code(...args, client));
                }
            })
        }
    }
}

// ahora te explico el code
//gracias, voy a ir abriendo la libreria de discordjs xd