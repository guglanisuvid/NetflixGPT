import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
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
        dispatch(toggleGptSearch());
    }

    const handleSignOut = () => {
        signOut(auth)
            .catch((error) => {
                console.log(error);
            });
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
        <div className="flex justify-between items-center w-full absolute z-50 px-10 py-4 bg-gradient-to-b from-black">
            <img
                className="h-10"
                src={LOGO}
                alt="logo"
            />
            {
                user
                &&
                <div>
                    {showGptSearch && <select
                        className="bg-transparent text-white text-lg font-medium tracking-wider outline-none focus:bg-transparent active:bg-transparent"
                        onChange={handleLanguageChange}
                    >
                        {
                            SUPPORTED_LANGUAGES.map(
                                language =>
                                    <option
                                        className="text-black bg-transparent focus:bg-transparent active:bg-transparent"
                                        key={language.identifier}
                                        value={language.identifier}
                                    >
                                        {language.name}
                                    </option>
                            )
                        };
                    </select>}
                    <button
                        className="text-[#E50914] text-lg bg-white font-medium px-8 py-2 rounded-md tracking-wider mx-4"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "Home Page" : "GPT Search"}
                    </button>
                    <button
                        className="bg-[#E50914] text-lg text-white font-medium px-8 py-2 rounded-md tracking-wider"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Logo;