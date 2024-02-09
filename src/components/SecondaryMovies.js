import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const SecondaryMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

    return (
        <div
            className="pl-4 md:pl-10 md:-mt-56 pb-10 mt-28 relative">
            <MoviesList title={"Now Playing Movies"} movies={nowPlayingMovies} />
            <MoviesList title={"Popular Movies"} movies={popularMovies} />
            <MoviesList title={"Top Rated Movies"} movies={topRatedMovies} />
            <MoviesList title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
    );
};

export default SecondaryMovies;