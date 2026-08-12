# Luxury Watch Store

A modern luxury watch store web application built as an academic full-stack project.

The project is designed to provide a premium watch-browsing experience with a React frontend and a Node.js/Express backend. The application includes a luxury-themed collection interface, individual watch detail pages, MongoDB Atlas database integration, and a real email-sending system using Gmail and Nodemailer.

---

## 📌 Project Status

The project is currently under development.

### Completed

- Luxury-themed responsive frontend
- React-based collection page
- Watch collection grid
- First 50 watches displayed from JSON data
- Watch search functionality
- Search by reference/model number
- Search by collection
- Search by material
- No-results search handling
- Individual watch detail pages
- Dynamic watch details using URL parameters
- Responsive watch detail layout
- Book an Appointment navigation
- MongoDB Atlas connection
- User model
- User registration API foundation
- Postman API testing setup
- Gmail email configuration
- Nodemailer email service
- Real test email sending
- Email test API
- Postman email API testing

### Currently Being Developed

- Real email verification during registration
- Verification token generation
- Email verification link
- User login
- Authentication protection
- Store/point-of-sale database
- Appointment booking system
- Appointment slot management
- Appointment confirmation emails

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- React Router
- Tailwind CSS
- React Icons

## Backend

- Node.js
- Express.js
- Nodemailer
- dotenv
- CORS

## Database

- MongoDB Atlas
- MongoDB Compass

## API Testing

- Postman

## Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

# 📂 Project Structure

The project is divided into separate frontend and backend applications.

```text
luxury-watch-store/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── emailController.js
│   │   │
│   │   ├── models/
│   │   │   └── user.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── emailRoutes.js
│   │   │
│   │   └── app.js
│   │
│   ├── services/
│   │   └── emailService.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── createWatchDetails.js
├── .gitignore
├── README.md
└── ...