🏥 Medi Care – Doctor Appointment & Healthcare Management System

Medi Care is a full-stack MERN healthcare platform that connects patients, doctors, and administrators into a unified digital healthcare ecosystem.

The system enables patients to book appointments, doctors to manage schedules, and admins to control and monitor the platform efficiently.

🌐 Live Demo
🚀 Production Deployment

Frontend (Live Website)
👉 https://medi-care-roan-tau.vercel.app

Backend API
👉 https://medi-care-1-backend.onrender.com

🚀 Features
👤 Patient Module

User registration & login (JWT Authentication)

Browse doctors by specialization

Book doctor appointments

View appointment history

Manage profile

🩺 Doctor Module

Secure doctor authentication

Manage availability & schedules

View assigned appointments

Update appointment status

🛠️ Admin Module

Admin dashboard

Manage doctors & users

View platform analytics

Approve / remove doctors

🧑‍💻 Tech Stack
🎨 Frontend

React.js

Vite

Tailwind CSS

Axios

⚙️ Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

☁️ Cloud & Dev Tools

Cloudinary → Image Uploads

MongoDB Atlas → Database Hosting

Render → Backend Hosting

Vercel → Frontend Hosting

Git & GitHub → Version Control

🏗️ System Architecture
Frontend (Vercel)
        ↓
Backend API (Render)
        ↓
MongoDB Atlas (Database)
        ↓
Cloudinary (Media Storage)

📁 Project Structure
medi_care/
├── admin/              # Admin Panel (React)
├── frontend/           # User & Doctor Frontend (React + Vite)
├── backend/            # Backend (Node.js + Express)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .gitignore
└── README.md

⚙️ Local Development Setup
1️⃣ Clone Repository
git clone https://github.com/Mayank67-tech/medi_care.git
cd medi_care

2️⃣ Backend Setup
cd backend
npm install


Create .env inside backend:

PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Run backend:

npm start


Backend runs on:

http://localhost:8000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

4️⃣ Admin Panel Setup
cd ../admin
npm install
npm run dev

🔐 Authentication Flow

JWT Token Based Authentication

Secure Cookie Support

Protected Routes Middleware

Role-Based Access Control (Patient / Doctor / Admin)

📦 API Features

RESTful API Design

MVC Architecture

Centralized Error Handling

Middleware-Based Authorization

🚀 Deployment
Frontend

Hosted on Vercel

CI/CD via GitHub Integration

Backend

Hosted on Render

Environment Variable Secure Configuration

📈 Future Enhancements

Payment Gateway Integration

Real-time Notifications

Email Appointment Reminders

Video Consultation Support

AI-based Doctor Recommendation

👨‍💻 Author

Mayank Agarwal

GitHub:
👉 https://github.com/Mayank67-tech

⭐ If You Like This Project

Please ⭐ the repository — it helps a lot!