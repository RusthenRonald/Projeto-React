# Costs - Project Management Application

A modern, responsive web application for managing projects and their associated services. Built with React and styled with CSS Modules for scalability and maintainability.

## 🚀 Features

- **Project Management**: Create, read, update, and delete projects
- **Service Tracking**: Manage services associated with each project with individual costs
- **Budget Management**: Track total budget vs. actual costs for each project
- **Category System**: Organize projects by predefined categories (Infrastructure, Development, Design, Planning)
- **Responsive Design**: Fully responsive interface optimized for mobile (430px+), tablet, and desktop screens
- **Modern UI**: Clean and intuitive user interface with smooth transitions and hover effects

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Architecture](#project-architecture)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Responsive Breakpoints](#responsive-breakpoints)

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js

## 🔧 Installation

1. **Clone the repository** (or navigate to the project directory):
```bash
cd new-project
```

2. **Install dependencies**:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode (Frontend + Backend)

Run both the React development server and the mock backend simultaneously:

```bash
npm start
```

This command will:
- Start the React development server on `http://localhost:3000`
- Start the JSON Server mock backend on `http://localhost:5000`
- Open the application in your default browser

### Frontend Only

If you only want to run the React development server:

```bash
npm run frontend
```

The app will open at `http://localhost:3000` and automatically reload as you make changes.

### Backend Only

To run only the JSON Server mock backend:

```bash
npm run backend
```

The API will be available at `http://localhost:5000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `build/` directory, ready for deployment.

### Testing

Run tests in interactive watch mode:

```bash
npm test
```

## 🏗️ Project Architecture

### Architecture Overview

```
Frontend (React)                Backend (JSON Server)
├── Pages                      ├── db.json
├── Components                 │   ├── projects
├── Services                   │   └── categories
└── Styles (CSS Modules)       └── REST API
        ↓                          ↑
        └──────── HTTP ────────────┘
```

### Frontend Architecture

**React Application Structure:**
- **Pages**: Main route components (Home, Projects, NewProject, Project, Company, Contact)
- **Components**: Reusable UI components (Layout, Forms, Cards)
- **Styles**: CSS Modules for component-scoped styling
- **Routing**: React Router v7 for client-side navigation

### Backend Architecture

**JSON Server Mock API:**
- Simulates RESTful API endpoints
- Uses `db.json` as data store
- Provides automatic CRUD endpoints for all resources

**API Endpoints:**
```
GET    /projects          - Fetch all projects
GET    /projects/:id      - Fetch specific project
POST   /projects          - Create new project
PUT    /projects/:id      - Update project
DELETE /projects/:id      - Delete project

GET    /categories        - Fetch all categories
GET    /categories/:id    - Fetch specific category
```

## 📁 Project Structure

```
new-project/
├── public/                          # Static files
│   ├── favicon.ico
│   ├── index.html
│   └── logo files
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Container.js         # Main layout container
│   │   │   ├── Container.module.css
│   │   │   ├── NavBar.js            # Navigation bar
│   │   │   ├── NavBar.module.css
│   │   │   ├── Footer.js            # Footer section
│   │   │   ├── Footer.module.css
│   │   │   ├── LinkButton.js        # Reusable link button
│   │   │   ├── LinkButton.module.css
│   │   │   ├── Loading.js           # Loading spinner
│   │   │   ├── Loading.module.css
│   │   │   └── Message.js           # Message display
│   │   ├── form/
│   │   │   ├── Input.js             # Text input component
│   │   │   ├── Input.module.css
│   │   │   ├── Select.js            # Dropdown select
│   │   │   ├── Select.module.css
│   │   │   ├── Submit.js            # Submit button
│   │   │   └── Submit.module.css
│   │   ├── project/
│   │   │   ├── ProjectCard.js       # Project card display
│   │   │   ├── ProjectCard.module.css
│   │   │   ├── ProjectForm.js       # Project form component
│   │   │   └── ProjectForm.module.css
│   │   ├── Services/
│   │   │   ├── ServiceCard.js       # Service card display
│   │   │   └── ServiceForm.js       # Service form component
│   │   └── pages/
│   │       ├── Home.js              # Home page
│   │       ├── Home.module.css
│   │       ├── Projects.js          # Projects listing page
│   │       ├── Projects.module.css
│   │       ├── NewProject.js        # Create new project page
│   │       ├── NewProject.module.css
│   │       ├── Project.js           # Single project details
│   │       ├── Project.module.css
│   │       ├── Company.js           # Company page
│   │       └── Contact.js           # Contact page
│   ├── img/                         # Images and icons
│   │   ├── costs_logo.png
│   │   ├── savings.svg
│   │   └── loading.svg
│   ├── App.js                       # Main application component
│   ├── index.js                     # React entry point
│   └── index.css                    # Global styles
├── db.json                          # JSON Server database
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## 🛠️ Technologies Used

### Frontend
- **React 19.0.0** - UI library
- **React Router DOM 7.2.0** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **UUID 11.1.0** - Unique ID generation
- **CSS Modules** - Scoped styling

### Backend
- **JSON Server 1.0.0-beta.3** - Mock REST API

### Development & Testing
- **React Scripts 5.0.1** - CRA build tools
- **Testing Library** - Component testing
- **Concurrently 9.1.2** - Run multiple processes simultaneously

### Styling
- **CSS3** - Modern CSS features (Flexbox, Grid, Media Queries)
- **Open Sans Font** - Google Fonts

## 📱 Responsive Breakpoints

The application is fully responsive with optimized layouts for:

- **Mobile**: 430px - 599px
  - Single column card layout
  - Reduced logo size (40px)
  - Compact navbar with smaller font sizes
  - Full-width forms and content

- **Tablet**: 600px - 767px
  - Two column card layout
  - Medium logo size (48px)
  - Adjusted spacing and padding

- **Medium Desktop**: 768px - 1023px
  - Two-column card layout on small tablets
  - Logo size (56px)
  - Balanced spacing

- **Large Desktop**: 1024px - 1199px
  - Three column card layout
  - Logo size (64px)
  - Optimal spacing

- **Extra Large**: 1200px+
  - Four column card layout
  - Full-size logo (64px)
  - Maximum content width (1200px)

## 🎨 Design Features

### Color Scheme
- **Primary Dark**: #222222
- **Accent Color**: #FFBB33 (Golden Yellow)
- **Background**: #EFEFEF (Light Gray)
- **Category Colors**:
  - Infrastructure: #FFAEBC (Light Pink)
  - Development: #A0E7E5 (Light Cyan)
  - Design: #B4F8C8 (Light Green)
  - Planning: #FBE7C6 (Light Orange)

### Layout Features
- Sticky footer that stays at bottom of viewport
- Centered content on mobile screens
- Flexbox-based responsive grid system
- Smooth transitions and hover effects
- Rounded corners (5px) on cards
- Consistent padding and spacing throughout

## 📋 API Request Examples

### Create a Project
```bash
POST http://localhost:5000/projects
Content-Type: application/json

{
  "name": "Website Redesign",
  "budget": "5000",
  "category": {
    "id": "2",
    "name": "Development"
  },
  "cost": 0,
  "services": []
}
```

### Add a Service to Project
```bash
PUT http://localhost:5000/projects/:id
Content-Type: application/json

{
  "services": [
    {
      "id": "uuid",
      "name": "Frontend Development",
      "cost": "2000",
      "description": "React component development"
    }
  ]
}
```

### Delete a Project
```bash
DELETE http://localhost:5000/projects/:id
```

## 📝 Notes

- The backend uses JSON Server, suitable for development and testing only
- For production, replace with a real backend (Node.js, Python, etc.)
- All data is stored in `db.json` and will reset on server restart
- The application requires both frontend and backend running for full functionality

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

**Email**: rusthenronald9@gmail.com

## 📄 License

This project is open source and available under the MIT License.

---

**Created by**: Rusthen Ronald  
**Last Updated**: July 2026  
**Version**: 1.0.0
