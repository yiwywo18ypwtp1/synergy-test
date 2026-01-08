# 🚀 FastAPI + PostgreSQL Test Assignment

This project is a Full-stack application built with React/TypeScript + FastAPI, SQLAlchemy, and PostgreSQL, containerized using Docker Compose.

The application imports related data from the public API dummyjson.com, stores it in a database, and exposes a REST API to view, update, and delete data.

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

* Python 3.11+

* FastAPI

* SQLAlchemy

* Alembic

* PostgreSQL

* Pytest

* Docker & Docker Compose

# 👨‍💻 Author

**Alexander Ivanitskiy**

Frontend / Full-stack Developer

🔥 Passionate about clean UI, glows & animations, and high-quality code architecture.

Made with pleasure for Synergy Way as an test assignment 😊