import axios from 'axios';

const GEMINI_API_URL = process.env.GEMINI_API_URL;

export const getGameRecommendations = async (userResponses) => {
    try {
        const response = await axios.post(`${GEMINI_API_URL}/recommendations`, {
            answers: userResponses
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching game recommendations from Gemini API:', error);
        throw error;
    }
};