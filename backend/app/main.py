from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.import_ import router as import_router
from app.routes.products import router as products_router
from app.routes.users import router as users_router

from app.database import engine
from . import models

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(import_router)
app.include_router(users_router)
app.include_router(products_router)

@app.get("/health")
def healthcheck():
    return {"status": "ok"}

