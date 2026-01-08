from pydantic import BaseModel


class UserOut(BaseModel):
    id: int
    first_name: str
    last_name: str | None
    email: str

    class Config:
        from_attributes = True