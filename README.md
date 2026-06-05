TaskPlanet Social App
Overview

TaskPlanet Social App is a full-stack social media application inspired by the Social Feed section of the TaskPlanet mobile app.

Users can:

Create an account
Login securely
Create text posts
Upload image posts
View posts from all users
Like posts
Comment on posts
View total likes and comments instantly
Features
Authentication
User Signup
User Login
JWT Authentication
Protected Routes
Posts
Create text posts
Upload image posts
Public social feed
Display username and content
Engagement
Like posts
Comment on posts
View total likes count
View total comments count
Store commenter usernames
Responsive Design
Mobile-friendly UI
Desktop-friendly UI
Inspired by TaskPlanet Social Feed
Tech Stack
Frontend
React.js
Axios
React Router DOM
CSS
Backend
Node.js
Express.js
JWT Authentication
Multer (Image Upload)
Database
MongoDB Atlas
Mongoose
Project Structure
taskplanet-social-app
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── styles
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── uploads
│
└── README.md
Installation
Clone Repository
git clone <repository-url>
Frontend Setup
cd frontend
npm install
npm run dev
Backend Setup
cd backend
npm install
npm run dev
Environment Variables
Backend

Create .env

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Frontend

Create .env

VITE_API_URL=http://localhost:5000/api
Future Improvements
User profile page
Post sharing
Pagination
Dark mode
Real-time notifications
Image optimization
Author

Gowtham Kumar Kummari
