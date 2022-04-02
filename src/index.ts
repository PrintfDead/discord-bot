import { Intents } from 'discord.js';
import { BotClient } from './client/ModClient';

const intents = new Intents(32767);
const client = new BotClient({ intents: intents }, { token: '', id: '' });

export default client;