import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movie_id }) => {
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/787699/videos?language=en-US", TMDB_OPTIONS);
        const json = await data.json();
        console.log(json);
    }

    useEffect(() => {
        getMovieVideos();
    }, []);

    return (
        <div>VideoBackground</div>
    )
}

export default VideoBackground;