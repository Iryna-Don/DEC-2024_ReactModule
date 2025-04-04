import {useEffect, useState} from "react";
import {IMovie} from "../models/IMovie.ts";
import Movie from "../components/movie/Movie.tsx";
import {getMovieByGenre, getMovieByID, getMovies, searchData} from "../sevices/api.service.ts";


const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [, setTotalPages] = useState<number>(1);
    useEffect(() => {
        getMovies(5)
            .then(data => {
                const {results, total_pages} = data;
                setMovies(results);
                setTotalPages(total_pages);
            })
    }, [])
    // =====================================================================
    useEffect(()=>{
        getMovieByID(1422211)
            .then(data=>console.log(data))

    }, [])
    // ========================================================
    // ========================================================
    useEffect(() => {
        searchData('thor')
            .then(data => {
                const {results} = data;
                setMovies(results);})


            }, []);

    // ========================================================
    // ========================================================
    useEffect(() => {
        getMovieByGenre(878)
            .then(data => {
                const {results} = data;
                setMovies(results);})
            }, []);

    // ========================================================
    return (
        <div>
            MoviesPage content
            <hr/>
            {movies.map((movie) => (<Movie key={movie.id} movie={movie}></Movie>))}
        </div>
    );
};

export default MoviesPage


