import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve, reject) => {
        read()
            .then((data) => {
                return json(data);
            })
            .then((parsedData) => {
                resolve(JSON.parse(parsedData));
            })
            .catch((error) => {
                reject(error);
            });
        });
    }
}