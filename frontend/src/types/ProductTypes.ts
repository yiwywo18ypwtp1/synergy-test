export type Product = {
    id: number,
    title: string,
    price: number,
    owner_id: number
}

export type ProductUpdate = {
    title: string,
    price: number
}

export type ImportProductsResponse = {
    status: string;
    created: number;
};
