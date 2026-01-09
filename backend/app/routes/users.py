from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.services import users_service
from app.schemas.users import UserOut


router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/", response_model=list[UserOut])
def list_users(db: Session = Depends(get_db)):
    return users_service.get_users(db)


@router.get("/{user_id}", response_model=UserOut)
def get_one(user_id: int, db: Session = Depends(get_db)):
    user = users_service.get_user(db, user_id)
    if not user:
        raise HTTPException(detail="User not found", status_code=404)

    return user
