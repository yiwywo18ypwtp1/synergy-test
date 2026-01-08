from pydantic import BaseModel


class ProductUpdate(BaseModel):
    title: str
    price: int


class ProductOut(BaseModel):
    id: int
    title: str
    price: int
    owner_id: int

    class Config:
        from_attributes = True