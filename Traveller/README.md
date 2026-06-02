# Traveller: Discover India

Traveller is a dynamic and responsive travel discovery web application built with HTML, CSS, Bootstrap, and JavaScript. It serves as a comprehensive guide to exploring the rich heritage, nature, spiritual sites, and cities of India.

## ✨ Features

- **Extensive Destination Database**: Over 140 meticulously curated Indian destinations, spanning across all states and Union Territories.
- **Dynamic Image Sourcing**: Destination cards feature authentic imagery sourced primarily from Wikipedia. The application uses a robust pre-fetching technique with a seamless fallback to keyword-based image retrieval via Flickr to ensure high-quality thumbnails.
- **Live Search & Filtering**: Real-time search by destination name, state, activity, or keyword. Advanced category and region filters available on the Explore page.
- **Trip Planner (My Trips)**: Users can save destinations to a personal trip planner. This data is persisted directly in the browser using `localStorage`.
- **Interactive UI**: Destination details open in a sleek Bootstrap modal, providing highlights, suggested durations, and the best time to visit without leaving the page.
- **Modern Responsive Design**: Built entirely with Vanilla CSS and Bootstrap 5, optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **HTML5**: Semantic and accessible document structure.
- **CSS3 & Bootstrap 5**: Custom styling combined with a powerful utility framework for rapid UI development and responsiveness.
- **Vanilla JavaScript (ES6+)**: Handles dynamic rendering, state management, filtering, and localStorage functionality without the overhead of heavy frontend frameworks.

## 📁 Project Structure

```text
Traveller/
├── index.html                  # Landing page with featured destinations
├── explore_traveller.html      # Comprehensive discovery page with filters
├── about_traveller.html        # Information about the platform
├── css/
│   └── style.css               # Core styles and design tokens
└── js/
    ├── app.js                  # Main logic, search, modal handling, and planner functionality
    ├── explore.js              # Dedicated logic for the explore page (state lists, routing)
    └── destinations.js         # Core data architecture (144+ destinations and image mapping)
```

## 🚀 How To Run

Since the application is built entirely using vanilla web technologies, no build step or package installation is required.

1. **Directly**: Simply open `index.html` in your favorite web browser.
2. **Local Server (Recommended)**: For the best experience (and to prevent any potential CORS issues with local fonts/assets), run a simple local HTTP server. 
   
   If you have Python installed, run this command in the project root:
   ```bash
   python -m http.server 5500
   ```
   Then visit `http://localhost:5500` in your browser.

## 💡 Architecture & Design Highlights

This project was built to demonstrate robust front-end fundamentals:
- **Separation of Concerns**: Data (`destinations.js`), styling (`style.css`), and logic (`app.js`) are decoupled for easy maintenance.
- **Data-Driven Rendering**: The entire UI is rendered from a centralized JSON-like JavaScript object (`STATE_DESTINATION_GROUPS`), making it incredibly easy to scale and add new destinations.
- **State Management**: Uses the DOM and `localStorage` to keep the user's trip itinerary in sync across page reloads.
- **Resilience**: The image loading system is built with fail-safes (pre-fetched maps + Flickr fallback + static error fallback) to ensure the UI never breaks due to broken image links.
