import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
// import VideoDetails from "./VideoDetails";

const Hero = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies);

    if (!movies) return;

    const heroMovie = movies[0];
    console.log(heroMovie);

    // const { original_title, overview } = heroMovie;

    return (
        // <div>
        /* <VideoDetails title={original_title} overview={overview} /> */
        <VideoBackground />
        // </div>
    );
};

export default Hero;