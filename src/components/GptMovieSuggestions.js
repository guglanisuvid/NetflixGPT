import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector(store => store.gpt);
    if (!movieNames) return null;

    return (
        <div
            className="pl-4 md:pl-10 pb-20 mt-8">
            {
                movieNames.map((movieName, index) => (
                    <MoviesList
                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))
            }
        </div>
    );
};

export default GptMovieSuggestions;