import random
import requests
from sqlalchemy.orm import Session

from ..models import User, Product

DUMMYJSON_USERS_URL = "https://dummyjson.com/users"
DUMMYSJON_PRODUCTS_URL = "https://dummyjson.com/products"


def import_users(db: Session) -> int:
    response = requests.get(DUMMYJSON_USERS_URL, timeout=10)
    response.raise_for_status()

    data = response.json()
    users = data.get("users", [])

    created = 0

    for u in users:
        exists = db.query(User).filter(User.id == u["id"]).first()
        if exists:
            continue

        user = User(
            id=u["id"],
            first_name=u["firstName"],
            last_name=u.get("lastName"),
            email=u["email"],
        )
        db.add(user)
        created += 1

    db.commit()
    return created

def import_products(db: Session) -> int:
    response = requests.get(DUMMYSJON_PRODUCTS_URL, timeout=10)
    response.raise_for_status()

    data = response.json()
    products = data.get("products", [])
    print("PRODUCTS FROM DUMMYJSON:", len(products))

    users = db.query(User).all()
    if not users:
        raise RuntimeError("No users found. Import users first.")

    created = 0

    for p in products:
        exists = db.query(Product).filter(Product.id == p["id"]).first()
        if exists:
            continue

        owner = random.choice(users) # присвоюємо рандомному юзеру з БД

        product = Product(
            id=p["id"],
            title=p["title"],
            price=int(p["price"]),
            owner_id=owner.id,
        )

        db.add(product)
        created += 1

    db.commit()
    return created