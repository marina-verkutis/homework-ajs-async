import GameSavingLoader from "./moduls/loader"

(async () => {
    try {
        const data = await GameSavingLoader.load();
        // Обработка успешной загрузки данных
        console.log(data);
    } catch (error) {
      // Обработка ошибки загрузки данных
        console.error(error);
    }
})();