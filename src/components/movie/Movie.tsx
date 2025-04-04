import {FC} from "react";
import {IMovie} from "../../models/IMovie.ts";
import {baseImgUrl} from "../../sevices/api.service.ts";

type MovieProps = {
    movie: IMovie;
}
const Movie: FC<MovieProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    return (
        <>
            <div className={'movieCard'}>
                 <p>{id}</p>
                <h2>{title}</h2>
                <img src={baseImgUrl+poster_path} alt={title}/>
            </div>
        </>
    );
};

export default Movie;

