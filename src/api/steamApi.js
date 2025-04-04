import axios from 'axios';

const STEAM_API_KEY = process.env.STEAM_API_KEY;
const STEAM_API_URL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

export const searchGames = async (gameNames) => {
    try {
        const response = await axios.get(STEAM_API_URL);
        const allGames = response.data.applist.apps;

        const filteredGames = allGames.filter(game => 
            gameNames.includes(game.name)
        );

        return filteredGames;
    } catch (error) {
        console.error('Error fetching games from Steam API:', error);
        throw error;
    }
};

export const getGameDetails = async (appId) => {
    try {
        const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
        return response.data[appId].data;
    } catch (error) {
        console.error('Error fetching game details from Steam API:', error);
        throw error;
    }
};