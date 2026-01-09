import { Product } from "../types/ProductTypes";

type Props = {
    product: Product;
    onEdit: () => void;
    onDelete: () => void;
};

const ProductRow = ({ product, onEdit, onDelete }: Props) => {
    return (
        <tr className="border-b hover:bg-gray-50/50">
            <td className="py-3 pl-3 border-r">{product.id}</td>
            <td className="pl-3">{product.title}</td>
            <td>${product.price}</td>
            <td className="text-right pr-3">
                <button
                    onClick={onEdit}
                    className="bg-blue-300/50 border-2 border-blue-300 h-8 px-3 rounded-lg text-blue-300 font-semibold hover:shadow-lg hover:shadow-blue-400/25 hover:bg-blue-300/75 transition-all duration-300"
                >
                    Edit
                </button>
            </td>
            <td className="text-right pr-3 w-20">
                <button
                    onClick={onDelete}
                    className="bg-red-300/50 border-2 border-red-300 h-8 px-3 rounded-lg text-red-300 font-semibold hover:shadow-lg hover:shadow-red-400/25 hover:bg-red-300/75 transition-all duration-300"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;
