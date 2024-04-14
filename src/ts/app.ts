import GameSavingLoader from "./moduls/loader"

GameSavingLoader.load().then((saving) => {
    // Обработка успешной загрузки данных
    console.log('Game saving loaded:', saving);
}).catch((error) => {
    // Обработка ошибки загрузки данных
    console.error('Error loading game saving:', error);
});