import { createPortal } from "react-dom";
import { useState } from "react";
import { Product } from "../types/ProductTypes";
import { updateProduct } from "../api/api";

type Props = {
    product: Product;
    onClose: () => void;
    onSaved: () => Promise<void> | void;
};

const EditProductModal = ({ product, onClose, onSaved }: Props) => {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);

    const save = async () => {
        await updateProduct(product.id, { title, price });
        await onSaved();
    };

    return createPortal(
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-[400px]">
                <h2 className="text-xl mb-4 font-semibold">Edit product</h2>

                <div className="flex flex-col gap-3">
                    <input
                        className="border px-3 py-2 rounded"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <input
                        type="number"
                        className="border px-3 py-2 rounded"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={onClose} className="px-4 py-2 border rounded">
                        Cancel
                    </button>

                    <button onClick={save} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default EditProductModal;
