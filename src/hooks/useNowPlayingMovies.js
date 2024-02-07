import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies =
        async () => {
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", TMDB_OPTIONS);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;