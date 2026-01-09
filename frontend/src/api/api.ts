import { api } from "../utils/api";
import { ImportProductsResponse, Product, ProductUpdate } from "../types/ProductTypes";
import { ImportUsersResponse, User } from "../types/UserType";

// Products
export async function fetchProducts() {
    return await api.get<Product[]>("/products");
}

export async function fetchProduct(id: number) {
    return await api.get<Product>(`/products/${id}`)
}

export async function updateProduct(id: number, data: ProductUpdate) {
    return await api.put(`/products/${id}`, data);
}

export async function deleteProduct(id: number) {
    return api.delete(`/products/${id}`);
}

export async function importProducts() {
    return await api.post<ImportProductsResponse>("/import/products");
}

// Users
export async function fetchUsers() {
    return await api.get<User[]>("/users");
}

export async function importUsers() {
    return await api.post<ImportUsersResponse>("/import/users");
}