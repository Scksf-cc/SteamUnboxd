export const formatGameData = (game) => {
    return {
        id: game.id,
        name: game.name,
        releaseDate: game.release_date,
        imageUrl: game.image_url,
        description: game.description,
    };
};

export const validateUserResponses = (responses) => {
    return responses.every(response => response !== null && response !== '');
};

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};