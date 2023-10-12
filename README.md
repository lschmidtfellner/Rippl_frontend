# 🎵 Rippl 

**Description:**  
Rippl is a full-stack MERN application that interacts with the Spotify API. It generates song recommendations based on seed tracks and a max popularity quotient.

## 🚀 Features:
- 🎧 Search for songs using Spotify's extensive database.
- 🎼 Generate song recommendations based on specific seed tracks and a max popularity quotient.

## 🔧 Installation:

1. **Clone the repository:**
    ```bash
    git clone [repo-link]
    ```

2. **Navigate to the project directory:**
    ```bash
    cd [your-repo-name]
    ```

3. **Install the required dependencies:**
    ```bash
    npm install
    ```

4. **Install and setup TailwindCSS** following the [official TailwindCSS documentation](https://tailwindcss.com/docs/installation).

## 🌐 API Endpoints:

### **Own API**:

- **Get a song by ID:** `/song/:id`
- **Search for a song:** `/search`
- **Retrieve user's liked songs:** `/:userId/likes`
- **Retrieve user's batches of recommendations:** `/:userId/batches`
- **Get songs for a specific batch:** `/:userId/batches/:batchId`
- **Generate song recommendations:** `/:userId/recommendations`
- **User registration:** `/signup`
- **User login:** `/login`
- **Add a song to user's likes:** `/:userId/:songId/like`
- **Remove a song from user's likes:** `/:userId/:songId/like`
- **Delete a batch of recommendations:** `/:userId/batch/:batchId`

### **Spotify API**:

- [**Search for a song**](https://api.spotify.com/v1/search)
- [**Get song recommendations**](https://api.spotify.com/v1/recommendations)

## 📦 Dependencies:

This app relies on several dependencies:
- `axios` for API calls.
- `tailwindcss` for styling.
- `react` and `react-router-dom` for front-end routing and rendering.
- `gsap` for animations.
- `dotenv` for environment variable management.
... and more, which can be found in the `package.json`.

## 🤝 Contribution:

Want to contribute to Rippl? Great! Feel free to fork the repository, make your changes, and submit a pull request. We're always looking for feedback and improvements.

## Stretch Goals:

- Personal/Spotify authentication
- Send likes directly to your Spotify
- Animated navbar

## 📜 License:

This project is currently not under any specific license. Use at your discretion, but always ensure to give credit where it's due.
