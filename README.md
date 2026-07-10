# Todo App

A simple full-stack Todo application with a Node.js + Express backend and a vanilla JavaScript frontend.

## Project Structure

- `backend/` - Express server, MongoDB model, and API routes
- `frontend/` - Static HTML, CSS, and JavaScript UI

## Features

- Add new tasks
- View pending and completed tasks separately
- Mark tasks complete or undo completion
- Delete tasks
- Persist todos in MongoDB

## Tech Stack

- Node.js
- Express
- Mongoose
- MongoDB
- HTML, CSS, JavaScript
- CORS

## Prerequisites

- Node.js installed
- MongoDB running locally on `mongodb://localhost:27017`

## Backend Setup

1. Open a terminal and navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   npm start
   ```

The server runs on `http://localhost:3000`.

## Frontend Setup

The frontend is a static site. Open `frontend/index.html` directly in your browser, or use a simple static server such as VS Code Live Server.

## API Endpoints

- `POST /post` - Create a new todo
- `GET /get` - Retrieve all todos
- `GET /get/:id` - Retrieve a single todo by ID
- `PUT /put/:id` - Update a todo's `completed` status
- `DELETE /delete/:id` - Delete a todo by ID

## Notes

- The backend uses the `Todo` model defined in `backend/models/data.js`.
- The frontend fetches data from `http://localhost:3000`.
- If MongoDB is not running, the backend cannot connect and the API will fail.

## Available Scripts

From the `backend/` folder:

- `npm start` - Start the server
- `npm run dev` - Start the server with `nodemon`

## File Overview

- `backend/server.js` - Express server and route definitions
- `backend/models/data.js` - Mongoose schema for todos
- `frontend/index.html` - Main HTML markup
- `frontend/index.css` - Styling for the app
- `frontend/index.js` - Frontend behavior and API integration
