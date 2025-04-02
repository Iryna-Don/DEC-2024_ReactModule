import axios from "axios";
import { ICar } from "../models/ICar";
const baseURL = "http://owu.linkpc.net/carsAPI/v1/";
const carsEndpoint = `${baseURL}cars`;

const axiosInstance = axios.create({
    baseURL: carsEndpoint,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
});

const carsApi = {
    getCars: async (): Promise<ICar[]> => {
        const { data } = await axiosInstance.get<ICar[]>('');
        return data;
    },

    createNewCar: async (newData: ICar): Promise<ICar> => {
        const { data } = await axiosInstance.post<ICar>('', newData);
        return data;
    },

    deleteCar: async (id: number): Promise<string> => {
        const { data } = await axiosInstance.delete<string>(`/${id}`);
        return data;
    }
};

export { carsApi };
