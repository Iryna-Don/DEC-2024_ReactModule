import {baseDummyUrl} from "../constants/urls.ts";
import {ICart} from "../models/cart/ICart.ts";

export const getData = async <T>(endpoint: string, id?: number): Promise<T[]> => {
    const urlWithId = baseDummyUrl + '/' + endpoint + '/' + id;

    const response = id ? await fetch(urlWithId) : await fetch(new URL(endpoint, baseDummyUrl));
    const data = await response.json();
    return (Array.isArray(data[endpoint])) ? data[endpoint] : [data];
};


export const getCarts = async (userId: string): Promise<ICart[]> => {
    const ulrCartsByUserId = new URL(`users/${userId}/carts`, baseDummyUrl);
    const response = await fetch(ulrCartsByUserId);
    const {carts} = await response.json();
    return carts;
};
