from sqlalchemy.orm import Session
from app.models import Product


def get_products(db: Session):
    return db.query(Product).all()


def get_product(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()


def update_product(db: Session, product_id: int, data):
    product = get_product(db, product_id)
    if not product:
        return None

    product.title = data.title
    product.price = data.price

    db.commit()
    db.refresh(product)

    return product


def delete_product(db: Session, product_id: int):
    product = get_product(db, product_id)
    if not product:
        return False

    db.delete(product)
    db.commit()

    return True