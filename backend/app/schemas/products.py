from pydantic import BaseModel, ConfigDict


class ProductUpdate(BaseModel):
    title: str
    price: int


class ProductOut(BaseModel):
    id: int
    title: str
    price: int
    owner_id: int

    model_config = ConfigDict(from_attributes=True)
