# 🚀 React + FastAPI + PostgreSQL Test Assignment

This project is a Full-stack web application built with React + TypeScript on the frontend
and FastAPI, SQLAlchemy, and PostgreSQL on the backend.  
The entire environment is containerized using Docker and Docker Compose.

The application imports related data (Users and Products) from the public API dummyjson.com,
stores it in a PostgreSQL database, and exposes a REST API for managing the data.
The frontend provides a clean and simple interface for viewing, sorting, editing,
and deleting products.

## 🧩 Project Overview
### Implemented features:

#### Backend
* FastAPI backend

* PostgreSQL database

* SQLAlchemy ORM

* Alembic migrations

* Import data from https://dummyjson.com

* Related entities: Users and Products

* CRUD operations for Products

* API tests using pytest

* Fully Dockerized environment

### Frontend

* Import data from Postgres

    * Import Users

    * then - import the Products

* Table-based products view

* Sorting products by ID and Price

* Editing products data

* Delete products



## 📦 Data Model

### Users

* Imported from DummyJSON

* Stored in database

* Read-only (used as reference data)

### Products

* Imported from DummyJSON

* Each product is linked to a random user (owner)

* Available operations:

    * List all products

    * Get product by ID

    * Update product

    * Delete product

## 🗂️ Project Structure
```bash
synergy-test/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── routes/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── tests/
│   ├── alembic/
│   ├── Dockerfile
│   └── pyproject.toml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.tsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── tailwind.config.js
├── docker-compose.yml
└── README.md
```

## 🔗 API Endpoints
### Healthcheck
```bash
GET /health
```

### Users (read-only)
```bash
GET /users
GET /users/{id}
```

### Products
```bash
GET    /products
GET    /products/{id}
PUT    /products/{id}
DELETE /products/{id}
```

### Import data from DummyJSON
```bash
POST /import/users
POST /import/products
```

## 🐳 Running the Project

### 1️⃣ Build and start containers
```bash
docker compose up -d --build
```

### 2️⃣ Apply database migrations
```bash
docker compose exec backend alembic upgrade head
```

### 3️⃣ Import initial data (also you can use the Postman)
```bash
# Import users first
curl -X POST http://localhost:8000/import/users

# Then import products
curl -X POST http://localhost:8000/import/products
```

## 🧪 Running Tests

Tests are executed inside the Docker container to ensure the same environment as the application runtime.
```bash
docker compose exec backend pytest
```


All tests are written using pytest and FastAPI TestClient.

## 🛠️ Tech Stack
### Backend
* Python 3.11+

* FastAPI

* SQLAlchemy

* Alembic

* PostgreSQL

* Pytest

* Docker & Docker Compose

### Frontend

* React 19.x +

* TypeScript

* Tailwind CSS 3

* Axios

# 👨‍💻 Author

**Alexander Ivanitskiy**

Frontend / Full-stack Developer

🔥 Passionate about clean UI, glows & animations, and high-quality code architecture.

Made with pleasure for Synergy Way as an test assignment 😊