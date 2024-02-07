import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";

const Hero = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const heroMovie = movies[0];

    const { id, original_title, overview } = heroMovie;

    return (
        <div>
            <VideoDetails title={original_title} overview={overview} />
            <VideoBackground movie_id={id} />
        </div>
    );
};

export default Hero;