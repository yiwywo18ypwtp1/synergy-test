from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.services import import_service

router = APIRouter(prefix="/import", tags=["Import data"])


@router.post("/users")
def import_users(db: Session = Depends(get_db)):
    created = import_service.import_users(db)

    return {
        "status": "ok",
        "created": created,
    }


@router.post("/products")
def import_products(db: Session = Depends(get_db)):
    created = import_service.import_products(db)

    return {
        "status": "ok",
        "created": created,
    }
