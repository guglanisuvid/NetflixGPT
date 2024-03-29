import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movie_id) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US", TMDB_OPTIONS);
        const json = await data.json();
        const filterData = json?.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useTrailerVideo;