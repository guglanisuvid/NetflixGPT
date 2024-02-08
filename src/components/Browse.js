import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import Hero from "./Hero";
import SecondaryMovies from "./SecondaryMovies";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {
                showGptSearch ?
                    (
                        <GptSearch />
                    ) : (
                        <>
                            <Hero />
                            <SecondaryMovies />
                        </>
                    )
            }
        </div>
    )
}

export default Browse;