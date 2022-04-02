import { Command } from "../client/ModClient";
import { SlashCommandBuilder } from '@discordjs/builders'

export default new Command({
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Comando de prueba de devuelve Pong! al decir ping"),
    code: (client, int) => {
        return int.reply("Pong!");
        // espera que falta
        // ! requiero que me expliques q valor tiene int xd?
        // el valor de int es CommandInteraction de discord.js | confirmo
        // esta en discord docs? para leerlo xd
        // como se lee LA PUTA DOCS DE DISCORD XD, no tiene descripciones :v, te tira los methods y propiedades pero no te dice ni poronga sobre que hace
        // pues eso lee los metodos y el tipo de dato que requiere y devuelve sin mas
        // est es la estructura base de un bot, dime lo que no entiendas y te explico
        // la unica vez que toque dsjs fue para hacer un bot sencillo(codigo un poquito c&p) xd
        // message xd?
        // aca usamos lo moderno de discord que son los slashscommand y las interaccines nada de message
        // pedon xd pero decia que si es como message, que devuelve un valor.
        //  obvio xD
        // int >>>>>> message exactop xD y es mejor porque tienes el ephemeral que es para que solo lo vea 1 usuario
        // crea un bot y pasame el token que iniciamos esta shit
        // y lo metes en un server
        // ok
    }
})