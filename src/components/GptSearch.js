import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";


const GptSearch = () => {
    return (
        <div
            className="min-h-screen max-h-fit">
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;