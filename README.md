# E-Commerce Project

A full-stack e-commerce web application for sports shoes, built with React and Laravel. This project features a modern, responsive user interface with a robust backend API for managing products, users, and orders.

## 📋 Project Description

This e-commerce platform is designed to provide a seamless online shopping experience for sports shoes. The application includes:

- **Product Catalog**: Browse and search through a wide selection of sports shoes
- **Product Details**: View detailed information, images, and specifications for each product
- **Shopping Cart**: Add products to cart and manage quantities
- **User Authentication**: Secure user registration and login system
- **User Profile**: Manage user account information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **RESTful API**: Backend API for all data operations

## 🛠️ Technologies Used

### Frontend

- **React** (v19.2.0) - JavaScript library for building user interfaces
- **React Router DOM** (v7.12.0) - Client-side routing
- **Axios** (v1.13.2) - HTTP client for API requests
- **Vite** (v7.2.4) - Fast build tool and development server
- **CSS3** - Custom styling with modern CSS features
- **ESLint** - Code linting and quality assurance

### Backend

- **Laravel** (v12.0) - PHP framework for web applications
- **PHP** (^8.2) - Server-side programming language
- **MySQL** - Relational database management system
- **Laravel Sanctum** (v4.0) - API authentication
- **Laravel Tinker** (v2.10.1) - REPL for Laravel
- **Faker PHP** (v1.23) - Generate fake data for testing
- **Pest** (v4.1) - Testing framework

### Development Tools

- **Git** - Version control
- **Composer** - PHP dependency manager
- **npm** - Node package manager




##  How to Run the Project

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **PHP** (v8.2 or higher)
- **Composer** (v2 or higher)
- **MySQL** (v8 or higher)
- **Git**

### Installation Steps

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd "E-Commerce Project"
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install PHP dependencies
composer install

# Create environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure your database in .env file
# Update the following variables:
# DB_DATABASE=your_database_name
# DB_USERNAME=your_database_username
# DB_PASSWORD=your_database_password

# Run database migrations
php artisan migrate

# (Optional) Seed the database with sample data
php artisan db:seed

# Start the Laravel development server
php artisan serve
```

The backend API will be available at `http://localhost:8000`

#### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install Node dependencies
npm install

# Start the development server
npm run dev


The frontend application will be available at `http://localhost:5173`

### Running Both Servers

You need to run both the backend and frontend servers simultaneously:



