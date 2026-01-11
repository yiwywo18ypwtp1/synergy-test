import { useState } from "react";
import { Product } from "../types/ProductTypes";
import ProductRow from "./ProductRow";
import EditProductModal from "./EditProductModal";
import { deleteProduct } from "../api/api";
import { User } from "../types/UserType";


type Props = {
    products: Product[] | null;
    users: User[] | null;
    reloadProducts: () => Promise<void>;
};

type SortField = "id" | "price";
type SortOrder = "asc" | "desc";

const ProductTable = ({ products, users, reloadProducts }: Props) => {
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const [sortField, setSortField] = useState<SortField>("id");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    const sortedProducts = [...(products ?? [])].sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];

        if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
        if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });


    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        reloadProducts();
        alert("Product successfully deleted!");
    }

    return (
        <div className="border rounded-xl overflow-hidden flex flex-col max-h-full">
            <div className="overflow-y-scroll max-h-screen">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-200 px-3 sticky top-0 z-10">
                        <tr className="border-b text-left">
                            <th
                                onClick={() => {
                                    setSortField("id");
                                    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
                                }}
                                className="py-2 pl-3 opacity-50 cursor-pointer hover:opacity-100"
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <span>ID</span>
                                    <img src="/sort.svg" className="h-5" />
                                </div>
                            </th>
                            <th className="text-black/50">Title</th>
                            <th className="text-black/50">Owner</th>
                            <th
                                onClick={() => {
                                    setSortField("price");
                                    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
                                }}
                                className="opacity-50 cursor-pointer hover:opacity-100"
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <span>Price</span>
                                    <img src="/sort.svg" className="h-5" />
                                </div>
                            </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {sortedProducts?.map(product => (
                            <ProductRow
                                key={product.id}
                                product={product}
                                users={users}
                                onEdit={() => setEditingProduct(product)}
                                onDelete={async () => handleDelete(product.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {editingProduct && (
                <EditProductModal
                    product={editingProduct}
                    onClose={() => setEditingProduct(null)}
                    onSaved={async () => {
                        setEditingProduct(null);
                        await reloadProducts();
                    }}
                />
            )}
        </div>
    );
};

export default ProductTable;
