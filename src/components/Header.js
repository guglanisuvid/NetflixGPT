import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Logo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

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
                <button
                    className="bg-[#E50914] text-lg text-white font-medium px-4 py-2 rounded-md tracking-wider"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            }
        </div>
    )
}

export default Logo;