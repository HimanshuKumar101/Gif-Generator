# 🎲 Random GIF Generator

A fun and interactive web app built with **React** that fetches random GIFs from the GIPHY API. Users can either generate a completely random GIF or search for one by keyword (tag).

## 🔥 Live Preview

> https://gifgeneratoremoji.netlify.app/

---
## 📸 Features

- 🎞️ Generate a random GIF
- 🔍 Search and generate GIFs by keyword (tag)
- ⏳ Loading spinner during API fetch
- 🎨 Stylish UI using **Tailwind CSS**
- ⚛️ Built with modern React (hooks, component structure)

---
## 🚀 Tech Stack

- **React** (with Hooks)
- **Tailwind CSS**
- **Axios** for API calls
- **GIPHY API** for GIF data

---
## 🛠️ Installation

1. **Clone the repository:**

git clone https://github.com/HimanshuKumar101/Gif-Generator.git
cd random-gif-generator

Install dependencies:

npm install
Add your GIPHY API key:

Create a .env file in the root directory:
REACT_APP_GIPHY_API_KEY=your_giphy_api_key_here
Run the app:

npm start
The app will run at http://localhost:3000.

🧠 How It Works
Custom Hook (useGif) handles the logic of calling the GIPHY API and managing GIF data.

Random Component displays a randomly selected GIF.

Tag Component allows users to type a keyword and fetch related GIFs.

Spinner shows while loading for smooth UX.

✨ To-Do / Improvements
 Add dark mode
 
 Pagination or infinite scroll
 
 Trending GIFs section
 
 Share GIF feature
 
 Save favorites locally


