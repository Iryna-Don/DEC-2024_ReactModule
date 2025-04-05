import axios from 'axios';
import {IMovieResponse} from "../models/IMovieResponse.ts";

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVlZmUxZTA5MzdjZTE0YmE4ZDA1YTliMjRmNzQxOCIsIm5iZiI6MTcyMzU4MTU0OS45NzcsInN1YiI6IjY2YmJjNDZkZDhjN2YwODYxMmQwMzIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMXiPLHS7rwvdSTtkw7lwCIEkqPaNiaIh5vw3OJdm3k';
const baseUrl = 'https://api.themoviedb.org/3';
export const baseImgUrl = 'https://image.tmdb.org/t/p/w200/';

const axiosInstance = axios.create(({
    baseURL: baseUrl,
    headers: {
        'accept': 'application/json'
    },
}))

axiosInstance.interceptors.request.use((request) => {
    request.headers.set(
        {
            ...request.headers,
            'Authorization': `Bearer ${apiKey}`,
        }
    )
    request.params = {
        ...request.params,
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        sort_by: 'popularity.desc'
    };
    return request;
});


export const getMovies = async (page: number = 1): Promise<IMovieResponse> => {
    const response = await axiosInstance.get(`/discover/movie`, {
        params: {
            page: page,
        },
    });
    return response.data;
}


export const getMovieByID = async (id: number): Promise<any> => {
    const response = await axiosInstance.get(`/movie/${id}`)
    return response.data;
}

export const searchData = async (search: string): Promise<IMovieResponse> => {
    const response = await axiosInstance.get(`/search/movie?query=${search}`)
    return response.data;
}

export const getMovieByGenre = async (genreID: number): Promise<IMovieResponse> => {
    const response = await axiosInstance.get(`/discover/movie`,
        {
            params: {
                with_genres: genreID,
            },

        });
    return response.data;
}