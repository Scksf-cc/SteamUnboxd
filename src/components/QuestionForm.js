import React, { useState } from 'react';
import { submitAnswers } from '../api/geminiApi';

const QuestionForm = () => {
    const [answers, setAnswers] = useState(Array(10).fill(''));
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        "What genre of games do you prefer?",
        "How many hours do you play per week?",
        "Do you prefer single-player or multiplayer games?",
        "What platform do you usually play on?",
        "Do you enjoy story-driven games?",
        "How important is graphics to you?",
        "Do you like competitive games?",
        "What is your favorite game of all time?",
        "Do you prefer indie games or AAA titles?",
        "Are you open to trying new genres?"
    ];

    const handleChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitAnswers(answers);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Game Recommendation Questionnaire</h1>
            {submitted ? (
                <p>Thank you for your responses! We are processing your answers.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div key={index}>
                            <label>
                                {question}
                                <input
                                    type="text"
                                    value={answers[index]}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </label>
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default QuestionForm;