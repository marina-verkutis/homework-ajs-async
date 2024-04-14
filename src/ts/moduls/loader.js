import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const parsedData = await json(data);
            return JSON.parse(parsedData);
        } catch (error) {
            throw new Error('Failed to load game saving: ' + error.message);
        }
    }
}