🛒 E-Commerce MERN Stack Project

📌 Overview
This is a full-stack E-Commerce web application built using the MERN stack.
It allows users to browse products, manage cart, and login securely using JWT authentication.
Admin can add products and upload images using Cloudinary.

🚀 Live Links
🌐 Frontend: https://your-frontend-link.com
⚙️ Backend: https://e-commerce-backend-aslv.onrender.com

🛠️ Tech Stack
Frontend: React.js ⚛️
Backend: Node.js + Express.js 🚀
Database: MongoDB 🍃
Authentication: JWT 🔐
Image Storage: Cloudinary ☁️
Deployment: Render 🌐

✨ Features

👤 User Features
User registration and login (JWT authentication)
View all products
Add products to cart 🛒
Remove items from cart
Secure authentication system

🛠️ Admin Features
Add new products
Upload product images using Cloudinary ☁️
Manage product list (view/delete products)

🔐 Authentication System
JWT (JSON Web Token) used for secure login
Passwords are hashed using bcrypt
Protected routes for user actions
Token-based session handling

☁️ Image Upload System
Product images uploaded to Cloudinary
Cloudinary returns image URL
URL stored in MongoDB database

📁 Project Structure
E-commerce/
│
├── admin/              # Admin Panel (React)
│   ├── src/
│   └── package.json
│
├── Backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
├── frontend/           # User Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js

⚙️ Installation (Local Setup)

1️⃣ Clone Repository
git clone https://github.com/shubham-dev001/E-commerce.git
cd E-commerce

2️⃣ Backend Setup
cd Backend
npm install
npm start

3️⃣ Admin Panel Setup
cd admin
npm install
npm run dev

4️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔑 Environment Variables

MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

📡 API Endpoints
POST /register → User registration
POST /login → User login
POST /upload → Upload product image
POST /addproduct → Add product
GET /products → Get all products

📌 Future Improvements
Payment gateway integration 💳
Order management system 📦
Admin authentication system 🔐 (future upgrade)
User profile page 👤

👨‍💻 Developer
Name: Shubham Vishwakarma
GitHub: https://github.com/shubham-dev001

