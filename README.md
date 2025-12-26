# 🏥 Medi Care – Doctor Appointment & Healthcare Management System

Medi Care is a **full-stack MERN application** designed to simplify healthcare management by connecting **patients, doctors, and admins** on a single platform.  
The system allows users to book appointments, doctors to manage schedules, and admins to control the entire platform.

---

## 🚀 Features

### 👤 Patient
- User registration & login (JWT based authentication)
- Browse doctors by specialization
- Book & manage appointments
- View appointment history
- Profile management

### 🩺 Doctor
- Secure doctor login
- Manage availability & schedules
- View assigned appointments
- Update appointment status

### 🛠️ Admin
- Admin dashboard
- Manage doctors & users
- View platform statistics
- Approve / remove doctors

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- Vite
- CSS / Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Cloud & Tools
- Cloudinary (image uploads)
- Git & GitHub
- REST APIs

---

## 📁 Project Structure

medi_care/                                                                                                                                                                   
├── admin/ # Admin panel (React)
├── frontend/ # User & Doctor frontend (React)
├── backend/ # Backend (Node.js + Express)
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
├── .gitignore
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Mayank67-tech/medi_care.git
cd medi_care

2️⃣ Backend Setup

cd backend
npm install
Create a .env file inside backend/:

PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Start backend server:

npm start


Backend will run on:

http://localhost:8000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

4️⃣ Admin Panel Setup
cd ../admin
npm install
npm run dev
