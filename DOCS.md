# Luxury Watch Store

# Project Setup & Contribution Guide

Version: 1.0

Current Phase: Frontend Development

Project Leader: Prasad Gaikwad

---

# Project Overview

Luxury Watch Store is a premium luxury watch showcase website developed as a Cloud Computing academic project.

Unlike a traditional e-commerce website, this platform focuses on showcasing luxury watches, brand heritage, collections, and appointment booking rather than direct online purchases.

The project is currently under Frontend Development using React.js and Tailwind CSS. Backend development using the MERN stack will be added in the next phase.

---

# Current Features

✔ Responsive Navbar

✔ Luxury Hero Video

✔ Second Hero Video Section

✔ Luxury Homepage Sections

✔ Collection Showcase

✔ Discover Collection Section

✔ Crafted For Generations Section

✔ Where Tradition Meets Innovation Section

✔ Find a Store Section

✔ Luxury Footer

✔ Responsive Design

✔ Luxury Mega Menu (Under Development)

---

# Technology Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- React Icons
- JavaScript (ES6+)

## Backend (Upcoming)

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Software Requirements

Before running the project, install:

- Node.js (Latest LTS)
- Git
- Visual Studio Code

Recommended VS Code Extensions

- ES7+ React Snippets
- Tailwind CSS IntelliSense
- Prettier
- GitLens
- Auto Rename Tag
- Auto Close Tag

---

# Project Structure

```
luxury-watch-store/

│

├── frontend/

│   ├── public/

│   ├── src/

│   │

│   ├── assets/

│   ├── components/

│   ├── pages/

│   ├── routes/

│   ├── App.jsx

│   └── main.jsx

│

├── backend/

│

├── docs/

│

├── README.md

├── .gitignore

└── package.json
```

---

# First Time Project Setup

Clone Repository

```bash
git clone https://github.com/<your-github-username>/luxury-watch-store.git
```

Go inside the project

```bash
cd luxury-watch-store
```

Go inside frontend

```bash
cd frontend
```

---

# Install Required Packages

Since package.json is already included in the repository, the easiest and recommended command is:

```bash
npm install
```

This command automatically installs all required project dependencies.

If you ever need to install them manually, use:

```bash
npm install react react-dom react-router-dom react-icons
```

Development dependencies:

```bash
npm install -D vite @vitejs/plugin-react tailwindcss @tailwindcss/vite 
```

**Note:** Team members normally only need to run `npm install` because all dependencies are listed in `package.json`.

---

# Run the Project

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# GitHub Collaboration Workflow

Since every member is added as a **Collaborator**, there is **NO NEED TO FORK** the repository.

Correct Workflow

```
Clone Repository

↓

Install Dependencies

↓

Pull Latest Main Branch

↓

Create New Feature Branch

↓

Develop Feature

↓

Commit Changes

↓

Push Branch

↓

Create Pull Request

↓

Project Leader Reviews

↓

Merge into Main
```

---

# First Time Setup For Team Members

Clone Repository

```bash
git clone https://github.com/<your-github-username>/luxury-watch-store.git
```

Enter Project

```bash
cd luxury-watch-store
```

Go to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run Project

```bash
npm run dev
```

---

# Daily Workflow

Before starting any work

Switch to main branch

```bash
git checkout main
```

Download latest changes

```bash
git pull origin main
```

---

# Create Your Own Branch

Never work directly on main.

Examples

Navbar Feature

```bash
git checkout -b feature/navbar
```

Footer Feature

```bash
git checkout -b feature/footer
```

Collection Page

```bash
git checkout -b feature/collection-page
```

Services Page

```bash
git checkout -b feature/services-page
```

Check Current Branch

```bash
git branch
```

The active branch will contain *

Example

```
main

* feature/navbar
```

---

# Work On Your Feature

Complete only your assigned task.

Examples

- Navbar
- Footer
- Hero Section
- Collection Page
- Services Page
- Points of Sale
- Careers

---

# Save Changes

Check changed files

```bash
git status
```

Stage files

```bash
git add .
```

Commit

```bash
git commit -m "Added responsive navbar"
```

---

# Push Your Branch

Example

```bash
git push origin feature/navbar
```

---

# Create Pull Request

Open GitHub Repository

GitHub automatically displays

```
Compare & Pull Request
```

Click it.

Choose

Base Branch

```
main
```

Compare Branch

```
feature/navbar
```

Title Example

```
Added Responsive Navbar
```

Description Example

```
Implemented responsive navbar with luxury menu and mobile responsiveness.
```

Click

```
Create Pull Request
```

Do NOT merge your own Pull Request.

The Project Leader reviews the changes before merging.

---

# After Pull Request Is Merged

Switch to Main

```bash
git checkout main
```

Download Latest Code

```bash
git pull origin main
```

Delete Old Branch (Optional)

```bash
git branch -d feature/navbar
```

---

# If Someone Else Updated Main

Before continuing your work

```bash
git checkout main
```

```bash
git pull origin main
```

Go back to your branch

```bash
git checkout feature/navbar
```

Merge latest main

```bash
git merge main
```

Resolve conflicts if required.

Continue working.

---

# Project Rules

✔ Never push directly to main

✔ Always create a new branch

✔ Pull latest changes before starting work

✔ Write meaningful commit messages

✔ Test your code before pushing

✔ Push only your feature branch

✔ Create Pull Request

✔ Wait for review before merging

---

# Git Cheat Sheet

Clone

```bash
git clone <repository-url>
```

Status

```bash
git status
```

Branch List

```bash
git branch
```

Create Branch

```bash
git checkout -b feature-name
```

Switch Branch

```bash
git checkout branch-name
```

Pull Latest

```bash
git pull origin main
```

Stage Files

```bash
git add .
```

Commit

```bash
git commit -m "message"
```

Push

```bash
git push origin feature-name
```

Delete Branch

```bash
git branch -d feature-name
```

View Commit History

```bash
git log --oneline
```

---

# Current Project Status

## Completed

- React + Vite Setup
- Tailwind CSS Integration
- Responsive Navbar
- Hero Section
- Second Hero Section
- Homepage Layout
- Footer
- Responsive Design
- Luxury Theme

## In Progress

- Collection Page
- Mega Menu
- Services Page
- Points of Sale
- Careers

## Upcoming

- Express.js Backend
- MongoDB
- Authentication
- Appointment Booking
- Admin Dashboard
- AWS Deployment

---

# Team Members

Contributors

- Swara Pawar
- Prajakta
- Dikshita
- Prasad Gaikwad

---

# Future Documentation

When backend development begins, this document will be updated with:

- Express.js Installation
- MongoDB Setup
- Mongoose
- Axios
- Environment Variables
- API Documentation
- Backend Folder Structure
- Deployment Guide

---

Happy Coding! 🚀