import React from 'react';

const GameList = ({ games }) => {
    return (
        <div className="game-list">
            <h2>Recommended Games</h2>
            {games.length === 0 ? (
                <p>No games found. Please try again later.</p>
            ) : (
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>
                            <h3>{game.name}</h3>
                            <p>{game.description}</p>
                            <a href={game.link} target="_blank" rel="noopener noreferrer">View on Steam</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GameList;