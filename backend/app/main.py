from fastapi import FastAPI

from app.routes.import_ import router as import_router
from app.routes.products import router as products_router
from app.routes.users import router as users_router

from app.database import engine
from . import models

app = FastAPI()

app.include_router(import_router)
app.include_router(users_router)
app.include_router(products_router)

@app.get("/health")
def healthcheck():
    return {"status": "okok"}

