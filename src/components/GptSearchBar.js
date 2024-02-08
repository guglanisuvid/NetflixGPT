import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config?.language);

    return (
        <form
            className="flex justify-center pt-40 mx-10">
            <input
                className="text-black text-lg bg-white font-medium px-4 py-2 rounded-md tracking-wider outline-none placeholder:text-gray-600"
                type="text"
                placeholder={language[languageKey]?.searchBarPlaceholder}
            />
            <button
                className="text-white text-lg bg-[#E50914] font-medium px-8 py-2 rounded-md tracking-wider mx-4"
            >
                {language[languageKey]?.searchBtnText}
            </button>
        </form>
    );
};

export default GptSearchBar;