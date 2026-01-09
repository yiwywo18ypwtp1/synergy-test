import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductTable from './components/ProductTable';
import { Product } from './types/ProductTypes';
import { User } from './types/UserType';
import { fetchProducts, fetchUsers } from './api/api';

function App() {
    const [users, setUsers] = useState<User[] | null>(null)
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const usersRes = await fetchUsers();
            if (usersRes.data)
                setUsers(usersRes.data);

            const productsRes = await fetchProducts();
            if (productsRes.data)
                setProducts(productsRes.data);
        }

        fetchData();
    }, [])

    const reloadProducts = async (): Promise<void> => {
        const res = await fetchProducts();
        setProducts(res.data);
    };

    return (
        <div className="h-screen flex flex-col">
            <Header onImportProducts={reloadProducts} />

            <div className="flex-1 flex flex-col gap-5 px-10 py-6 overflow-hidden">
                <h1 className="text-2xl font-semibold">Products</h1>

                <ProductTable
                    products={products}
                    reloadProducts={reloadProducts}
                />
            </div>
        </div>
    );

}

export default App;
