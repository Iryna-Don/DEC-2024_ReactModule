import axios from 'axios';
import {IMovieResponse} from "../models/IMovieResponse.ts";
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTVlZmUxZTA5MzdjZTE0YmE4ZDA1YTliMjRmNzQxOCIsIm5iZiI6MTcyMzU4MTU0OS45NzcsInN1YiI6IjY2YmJjNDZkZDhjN2YwODYxMmQwMzIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMXiPLHS7rwvdSTtkw7lwCIEkqPaNiaIh5vw3OJdm3k';
const baseUrl = 'https://api.themoviedb.org/3';
export const baseImgUrl = 'https://image.tmdb.org/t/p/w200/';


export const getMovies = async (page: number = 1): Promise<IMovieResponse> => {
    const response = await axios.get(`${baseUrl}/discover/movie`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: 'application/json'
        },
        params: {
            include_adult: 'false',
            include_video: 'false',
            language: 'en-US',
            page: page,
            sort_by: 'popularity.desc'
        },
    });
    return response.data;
}


export const getMovieByID = async (id: number): Promise<any> => {
    const response = await axios.get(`${baseUrl}/find/${id}`,
         {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: 'application/json'
        },
    });
    return response.data;
}


export const searchData = async (search:string): Promise<IMovieResponse> => {
    const response = await axios.get(`${baseUrl}/search/movie?query=${search}`,
         {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: 'application/json'
        },
    });
    return response.data;
}

export const getMovieByGenre = async (genreID: number): Promise<IMovieResponse> => {
    const response = await axios.get(`${baseUrl}/discover/movie`,
        { headers: {
                Authorization: `Bearer ${apiKey}`,
                accept: 'application/json'
            },
            params: {
                with_genres: genreID,
            },

        });
    return response.data;
}

