import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addGptMovieResult, toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Logo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const handleGptSearchClick = () => {
        showGptSearch && dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
        dispatch(toggleGptSearch());
    }

    const handleSignOut = () => {
        dispatch(toggleGptSearch());
        dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full absolute z-50 px-4 md:px-10 py-4 bg-gradient-to-b from-black ">
            <img
                className="h-10"
                src={LOGO}
                alt="logo"
            />
            {
                user
                &&
                <div
                    className="flex gap-2 flex-wrap justify-between md:gap-4">
                    <button
                        className="text-[#E50914] text-sm md:text-lg bg-white font-medium px-8 py-2 rounded-md tracking-wider"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Home Page" : "GPT Search"}
                    </button>
                    <button
                        className="bg-[#E50914] text-sm md:text-lg text-white font-medium px-8 py-2 rounded-md tracking-wider"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                    {showGptSearch && <select
                        className="bg-transparent text-white text-sm md:text-lg font-medium tracking-wider outline-none mx-auto focus:bg-transparent active:bg-transparent"
                        onChange={handleLanguageChange}
                    >
                        {
                            SUPPORTED_LANGUAGES.map(
                                language =>
                                    <option
                                        className="text-black bg-transparent"
                                        key={language.identifier}
                                        value={language.identifier}>
                                        {language.name}
                                    </option>
                            )
                        };
                    </select>}
                </div>
            }
        </div>
    )
}

export default Logo;