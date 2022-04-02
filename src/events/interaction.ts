import { Interaction } from "discord.js";
import { Event } from "../client/ModClient";

export default new Event({
    name: "interaction",
    code: (client: any, int: Interaction) => {
        if (!int.isCommand()) return;
        const command = client.commands.get(int.command?.name);
        if(!command) return;

        try {
            command.code(client, int);
        } catch (e) {
            console.error(e);
        }
    }
})