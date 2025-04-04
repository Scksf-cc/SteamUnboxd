# Game Recommendation App

This project is a web application designed to help users discover video games based on their preferences. The app presents a series of questions to the user about their gaming interests and utilizes the Gemini API to generate a list of recommended games. It then fetches detailed information about these games from the Steam API and displays them to the user.

## Features

- Interactive question form to gather user preferences
- Integration with the Gemini API for game recommendations
- Fetching game details from the Steam API
- User-friendly interface to display recommended games

## Project Structure

```
game-recommendation-app
├── public
│   ├── index.html        # Main HTML document
│   └── styles.css       # Styles for the web app
├── src
│   ├── app.js           # Entry point of the application
│   ├── api
│   │   ├── geminiApi.js # Functions to interact with the Gemini API
│   │   └── steamApi.js  # Functions to interact with the Steam API
│   ├── components
│   │   ├── QuestionForm.js # Component for user questions
│   │   └── GameList.js     # Component to display game recommendations
│   └── utils
│       └── helpers.js      # Utility functions
├── package.json           # npm configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd game-recommendation-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API keys for the Gemini and Steam APIs.

5. Start the development server:
   ```
   npm start
   ```

## Usage

- Open your web browser and navigate to `http://localhost:3000`.
- Answer the questions presented in the form.
- View the list of recommended games based on your responses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.