# AI Recipe Generator

AI Recipe Generator is a mobile app that transforms selected ingredients into tailored recipes using AI. Built with React Native Expo, Node.js, Express, and MongoDB, it leverages Google's Gemini 2.0 Flash AI for intelligent recipe suggestions.

## Features

### Recipe Generation

- Generates up to 3 recipes based on user-selected ingredients.
- Provides preparation steps, cooking times, and serving info.

### User Authentication

- Secure signup/login with JWT authentication.
- Password encryption and session management.

### Favorite Recipes

- Save and organize favorite recipes.
- Cloud sync and offline access.
- Share recipes with friends.

## Tech Stack

- **Frontend:** React Native Expo, React Native Paper
- **Backend:** Node.js, Express, MongoDB
- **AI:** Google's Gemini 2.0 Flash for recipe generation (note: free plan, limited requests)

## Installation

### Prerequisites

- Node.js (v14+)
- npm/Yarn
- Expo CLI
- MongoDB (local or Atlas)
- Google AI API key

### Setup

#### Frontend

```sh
cd frontend
npm install
npm start
```

#### Backend

```sh
cd backend
npm install
npm start
```

#### Strating development server

```sh
npx expo start
```

#### Build for ios and andorid

```sh
npx expo run:is

npx expo run:android
```

## API Overview

### Authentication

- `POST /api/auth/register` – User registration
- `POST /api/auth/login` – User login (returns JWT)

### Recipes

- `GET /api/recipes` – Retrieve saved recipes
- `POST /api/recipes/saveRecepie` – Save a recipe
- `DELETE /api/recipes/:id` – Remove a recipe

## Security & Performance

- Secure JWT authentication & password hashing
- API rate limiting & input validation
- Optimized database queries & caching

## License

MIT

## Citations

[GitHub Repository](https://github.com/sinisam92/ai-recipe-generator)
