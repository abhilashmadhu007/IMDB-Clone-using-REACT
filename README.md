# 🎬 IMDB Clone using React

A **beautiful, responsive IMDB Clone** built using **React (Vite)** that allows users to **browse movies** fetched from the **TMDB API**, add them to a **watchlist**, and filter or search through their saved movies.  

This project showcases **React fundamentals**, **API integration**, **state management**, and **dynamic UI interactions** — making it ideal for learning or portfolio demonstration.

---

## 🚀 Features

### 🎥 Movies Page
- Fetches real-time movie data from the **TMDB (The Movie Database) API**.
- Displays movies with **banner images** and **titles** in a clean, modern layout.
- Each movie card has an **Add to Watchlist** button.
  - The button is **toggle-based** — clicking it once adds the movie to the watchlist, and it turns into a ❌ button to remove it.
- Beautiful, responsive, and animated interface for a smooth user experience.

---

### ⭐ Watchlist Page
- Displays all movies added to the watchlist with:
  - **Movie name**
  - **Rating**
  - **Genre**
- Includes a **Search Bar** to quickly find movies from your watchlist.
  - Other movies hide dynamically when searching.
- **Sorting Options**:
  - Sort movies by **rating** (Ascending / Descending).
- **Genre Badges**:
  - When a movie is added, its **genre badge** appears at the top.
  - Removing a movie removes its genre badge automatically.
  - Clicking a genre badge filters the movies by that genre.
- **Delete Button**:
  - Each movie in the watchlist can be removed individually.

---

## 🧠 Tech Stack

- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS** (for styling)
- 🌐 **TMDB API** (for movie data)
- 💾 **Local Storage** (for watchlist persistence)
- 🧰 **JavaScript (ES6+)**

---

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
https://github.com/abhilashmadhu007/IMDB-Clone-using-REACT.git
```

### 2. Navigate into the Project Directory
```bash
cd IMDB-Clone-using-REACT
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
### 5. Open in Browser
```bash
npm run dev
```

### 6. Open in Browser
```bash
http://localhost:5173/
```
