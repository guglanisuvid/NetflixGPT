import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import Hero from "./Hero";

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}

export default Browse;