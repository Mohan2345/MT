# Netflix Clone

A Netflix-inspired web application built with Vite and React, fetching movie data from TMDB API and using Firebase for user authentication.

## Features

- User authentication (sign up, login, logout) using Firebase
- Browse movies and TV shows fetched from TMDB API
- Responsive design for various screen sizes
- Movie/Show details page with additional information
- Loading state displaying movie published date and information
- Video player with movie/show information displayed below

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/) (Authentication)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone [[https://github.com/Mohan2345/MT.git]
   cd NETFLIX
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Configuration

1. TMDB API:
   - Sign up for a TMDB account and get your API key
   - Create a `.env` file in the root directory
   - Add your TMDB API key:
     ```
     VITE_TMDB_API_KEY=your_api_key_here
     ```

2. Firebase Setup:
   - Create a new Firebase project
   - Enable Authentication in the Firebase console
   - Add a new web app to your Firebase project
   - Copy the Firebase configuration
   - Add the configuration to your `.env` file:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

2. Open your browser and visit `http://localhost:5173`

3. Sign up for a new account or log in with existing credentials

4. Browse movies and TV shows, click on a title to view more details

5. Enjoy the Netflix-like experience!

## Loading State

While loading movie or show details, the app displays:
- Movie/Show published date
- Basic information about the title

This information is shown below the player option to provide users with immediate context while the full content loads.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
