from pydantic import BaseModel, ConfigDict


class UserOut(BaseModel):
    id: int
    first_name: str
    last_name: str | None
    email: str

    model_config = ConfigDict(from_attributes=True)