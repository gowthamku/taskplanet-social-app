# TaskPlanet Social App

A full-stack social media application inspired by the Social Feed feature of the TaskPlanet mobile application.

Users can create accounts, publish text or image posts, like posts, comment on posts, and view content shared by other users.

---

## Features

### Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

### Post Management

- Create text posts
- Upload image posts
- Create posts with text, image, or both
- View all posts in a public feed

### Social Interaction

- Like posts
- Comment on posts
- View total likes
- View total comments
- Display usernames for comments

### Responsive Design

- Mobile-friendly layout
- Desktop-friendly layout
- Clean and simple user interface

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- JWT Authentication
- Multer

### Database

- MongoDB Atlas
- Mongoose

---

## Project Structure

```bash
taskplanet-social-app
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   └── api
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   └── config
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/taskplanet-social-app.git
```
## Live Demo

### Frontend (Vercel)
https://taskplanet-social-app-delta.vercel.app

### Backend API (Render)
https://taskplanet-social-app-kzdq.onrender.com

### Database
MongoDB Atlas

## Deployment

The application is deployed using:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

The frontend communicates with the backend through REST APIs, and all application data is stored in MongoDB Atlas.

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/signup
POST /api/auth/login
```

### Posts

```http
GET    /api/posts
POST   /api/posts
PUT    /api/posts/like/:id
POST   /api/posts/comment/:id
```

---

## Assignment Requirements Covered

✅ User Signup and Login

✅ MongoDB Database Integration

✅ JWT Authentication

✅ Create Text Posts

✅ Create Image Posts

✅ Public Feed

✅ Like Functionality

✅ Comment Functionality

✅ Display Like Count

✅ Display Comment Count

✅ Responsive UI

✅ Separate Frontend and Backend Structure

---

## Future Improvements

- User Profiles
- Post Sharing
- Pagination
- Real-time Notifications
- Dark Mode
- Search Functionality

---

## Author

**Gowtham Kumar Kummari**

Full Stack Developer

GitHub: https://github.com/gowthamku

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dd46c288-c336-4838-be19-c35d5d26660e" />

