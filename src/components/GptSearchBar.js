import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/gemini";
import { TMDB_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config?.language);
    const dispatch = useDispatch();

    const searchText = useRef(null);

    const tmdbMovieSearch = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            +
            movie
            +
            "&include_adult=false&language=en-US&page=1", TMDB_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "Act as a movie recommendation system and suggest some movies for the query: "
            +
            searchText.current.value
            +
            ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const resData = await model.generateContent(prompt);
        const geminiResult = resData?.response.text().split(",");

        const tmdbMovieResults = geminiResult.map((movie) => tmdbMovieSearch(movie));
        const tmdbMovieData = await Promise.all(tmdbMovieResults);

        dispatch(addGptMovieResult({ movieNames: geminiResult, movieResults: tmdbMovieData }));
    };

    return (
        <div>
            <form
                className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between md:justify-center pt-40 mx-4 md:mx-10"
                onSubmit={(e) => e.preventDefault()}>
                <input
                    className="text-black text-lg bg-white font-medium px-4 py-2 rounded-md tracking-wider outline-none placeholder:text-gray-600"
                    ref={searchText}
                    type="text"
                    placeholder={language[languageKey]?.searchBarPlaceholder}
                />
                <button
                    className="text-white text-lg bg-[#E50914] font-medium px-8 py-2 rounded-md tracking-wider"
                    onClick={handleGptSearchClick}
                >
                    {language[languageKey]?.searchBtnText}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;