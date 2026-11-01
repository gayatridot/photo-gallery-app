# Photo Gallery Web App

A responsive Photo Gallery web application built with React, Vite, and Tailwind CSS as part of the Celebrare Frontend Intern Pre-Screening Assignment.

## 🚀 Live Demo & Repository
* **GitHub Repository:** [Insert Link Here]
* **Screen Recording (Video Demo):** [Insert Google Drive / Unlisted YouTube Link Here]

---

## 🛠️ Tech Stack
* **Framework:** React (Functional Components & Hooks)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (No external UI libraries like MUI, Ant Design, or Bootstrap)
* **API:** [Picsum Photos API](https://picsum.photos/v2/list?limit=30)

---

## ✨ Features & Requirements Implemented
1. **Project Setup:** Built completely from scratch using React, Vite, and Tailwind CSS.
2. **API Integration:** Fetches 30 photos on initial load using a custom hook with built-in loading spinners and error-handling states.
3. **Responsive Grid Layout:** Adapts seamlessly across screen sizes:
   * **Desktop:** 4 columns
   * **Tablet:** 2 columns
   * **Mobile:** 1 column
4. **Real-Time Search Filter:** Instant filtering by author name as you type, optimized using `useCallback` and `useMemo` without triggering extra API calls or page reloads.
5. **Favourites Management (`useReducer` + `localStorage`):** 
   * Heart icon toggles items into a favourites list managed via `useReducer`.
   * Favourited photos persist across browser page refreshes using `localStorage`.
6. **Custom Hook (`useFetchPhotos`):** Encapsulates data fetching logic (`photos`, `loading`, `error`) cleanly away from the UI components.
7. **Performance Optimization:** Leverages `useCallback` for search handlers and `useMemo` for computation of the filtered photo list.

---

## 📁 Project Structure

```text
src/
├── components/          # UI Components (Gallery, PhotoCard, etc.)
├── hooks/               # Custom Hooks (useFetchPhotos.js)
├── reducer/             # State Reducers for Favourites
├── App.jsx              # Main Application Component
├── main.jsx             # React Entry Point
└── index.css            # Tailwind CSS Imports

```

---

## 💻 Getting Started Locally

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

```


2. **Navigate to the project directory:**
```bash
cd your-repo-name

```


3. **Install dependencies:**
```bash
npm install

```


4. **Run the development server:**
```bash
npm run dev

```


5. **Open in browser:**
Open the local URL provided by Vite (typically `http://localhost:5173`) in your browser.

