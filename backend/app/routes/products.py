from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.services import products_service
from app.schemas.products import ProductOut, ProductUpdate


router = APIRouter(prefix="/products", tags=["Products"])


@router.get("/", response_model=list[ProductOut])
def list_products(db: Session = Depends(get_db)):
    return products_service.get_products(db)


@router.get("/{product_id}", response_model=ProductOut)
def get_one(product_id:int, db: Session = Depends(get_db)):
    product = products_service.get_product(db, product_id)
    if not product:
        raise HTTPException(detail="Product not found", status_code=404)
    
    return product


@router.put("/{product_id}", response_model=ProductOut)
def update(product_id: int, data: ProductUpdate, db: Session = Depends(get_db)):
    updated = products_service.update_product(db, product_id, data)
    if not updated:
        raise HTTPException(detail="Product not found", status_code=404)
    
    return updated


@router.delete("/{product_id}", status_code=204)
def delete(product_id: int, db: Session = Depends(get_db)):
    deleted = products_service.delete_product(db, product_id)
    if not deleted:
        raise HTTPException(detail="Product not found", status_code=404)