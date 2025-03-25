import {IProduct} from "../models/IProduct.ts";

const fetchDataFromDummy = async <T>(endpoint: string): Promise<T[]> => {
    const response = await fetch(import.meta.env.VITE_API_BASE_DUMMY_URL + '/' + endpoint + '?limit=' + import.meta.env.VITE_API_DUMMY_LIMIT + '&skip=' + import.meta.env.VITE_API_DUMMY_SKIP);
    const data = await response.json();
    return data[endpoint];
}

const getProducts = () => fetchDataFromDummy<IProduct>('products');

export {getProducts};