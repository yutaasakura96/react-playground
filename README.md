# React Playground

React Playground is a practice project created to explore and demonstrate various React concepts, including component-based architecture, state management, and event handling. This project is intended for **learning purposes only** and serves as a playground for experimenting with React features and patterns.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Features

### ConditionalRendering Component
- Demonstrates conditional rendering based on the `isLoggedIn` state.
- Includes a toggle button to switch between "Login" and "Logout" states dynamically.

### EventHandling Component
- Implements a counter with `Increase`, `Decrease`, and `Reset` buttons.
- Uses the `useState` hook to manage state changes dynamically.

### Student Component
- Displays student information (e.g., name, email) passed via props.
- Showcases skills using an array, highlighting dynamic data rendering through props.

### User Component
- Introduces state management with the `useState` hook to manage user-specific information.

### Welcome Component
- Simplifies the app structure and serves as an introductory component.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Basic understanding of React.js.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yuta-asakura/react-playground.git
   ```

2.	Navigate to the project directory:
  ```bash
  cd react-playground
  ```

3.	Install dependencies:
  ```bash
  npm install
  ```

Running the Application
1.	Start the development server:
  ```bash
  npm run dev
  ```

2.	Open your browser and visit:

http://localhost:5173

Purpose

This project is solely for practicing React development. It provides an opportunity to experiment with and understand React concepts in a hands-on way. Feel free to modify and expand upon this playground as you continue learning React.

License

This project is licensed under the MIT License. See the LICENSE file for details.
