# Personal Journaling App Backend

This repository contains the backend service for the Personal Journaling App, built with Node.js, Express, PostgreSQL, and Sequelize ORM. This service handles user authentication, journal entry management, categorization, and data summary.

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v20 or higher)
- [PostgreSQL](https://www.postgresql.org/download/)(v14 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Samueelx/Personal-journal-app.git
   cd personal-journaling-app-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env

PORT=3000
JWT_SECRET=your_jwt_secret
DB_USERNAME=your_db_username
DB_NAME=the_db_name
DB_PASSWORD=your_database_password

```

## Database Setup

Create a new PostgreSQL database:

        CREATE DATABASE journals;

## Running the Application

To start the application, use this command:

        npm run dev

The backend service will be running on

```bash
http://localhost:3000
```

## API Documentation

### User Authentication

#### Register

**URL**: `/api/users/register`  
**Method**: `POST`  
**Body Parameters**:

        {
            "email": "user@example.com",
            "username": "username",
            "password": "password",
            "firstName": "First",
            "lastName": "Last"
        }

**Success Response**:

    Code: 201 Created

#### Login

**URL**: ```/api/users/register```  
**Method**: ```POST```  
**Body Parameters**:

        {
            "email": "user@example.com",
            "password": "password"
        }

**Success Response**:

    Code: 200 OK
    Content: { "token": "jwt_token" }


