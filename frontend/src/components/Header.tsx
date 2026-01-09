import { useState } from "react";
import { importProducts, importUsers, fetchProducts, fetchUsers } from "../api/api";
import { Product } from "../types/ProductTypes";
import { User } from "../types/UserType";

type HeaderProps = {
    onImportProducts: () => void;
}

const Header = ({ onImportProducts }: HeaderProps) => {
    const [users, setUsers] = useState<User[] | null>(null)
    const [products, setProducts] = useState<Product[] | null>(null);

    const [usersLoading, setUsersLoading] = useState<boolean>(false);
    const [productsLoading, setProductsLoading] = useState<boolean>(false);


    const loadUsers = async () => {
        setUsersLoading(true);

        await importUsers();

        const users = await fetchUsers();
        setUsers(users.data);

        setUsersLoading(false);
    }

    const loadProducts = async () => {
        if (!users) {
            alert("Import Users before!");
            return;
        }

        setProductsLoading(true);

        await importProducts();
        await onImportProducts();

        const products = await fetchProducts();
        setProducts(products.data);

        setProductsLoading(false);
    }

    return <header className="bg-gray-100 w-screen h-20 px-6 border-b-2 flex flex-row items-center justify-between">
        <h1 className="text-3xl">Synergy Test Dashboard</h1>

        <div className="flex flex-row items-center gap-5">
            <button
                disabled={usersLoading}
                onClick={loadUsers}
                className="bg-blue-400 text-lg h-10 px-5 rounded-lg text-white font-semibold shadow-lg hover:bg-blue-500 hover:shadow-blue-300/75 transition-all duration-300"
            >
                {usersLoading ? "Loading..." : "Import Users"}
            </button>
            <button
                disabled={productsLoading}
                onClick={loadProducts}
                className={`${users ? "bg-blue-400 border-blue-400 text-white" : "bg-transparent border-blue-400 text-blue-400 pointer-events-none"} text-lg border-2 h-10 px-5 rounded-lg font-semibold shadow-lg hover:bg-blue-500 hover:border-blue-500 hover:shadow-blue-300/75 transition-all duration-300`}
            >
                {productsLoading ? "Loading..." : "Import Products"}
            </button>
        </div>
    </header>
}

export default Header;