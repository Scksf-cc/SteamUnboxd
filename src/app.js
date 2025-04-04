import React, { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import GameList from './components/GameList';
import { fetchGamesFromGemini, fetchGamesFromSteam } from './api/geminiApi';

const App = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUserResponses = async (responses) => {
        setLoading(true);
        setError(null);
        try {
            const recommendedGames = await fetchGamesFromGemini(responses);
            const gameDetails = await fetchGamesFromSteam(recommendedGames);
            setGames(gameDetails);
        } catch (err) {
            setError('Failed to fetch games. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Game Recommendation App</h1>
            <QuestionForm onSubmit={handleUserResponses} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <GameList games={games} />
        </div>
    );
};

export default App;