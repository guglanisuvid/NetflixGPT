import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        onAuthStateChanged(auth, (user) => {
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
    }, []);

    return (
        <div className="flex justify-between items-center w-full absolute z-50">
            <img
                className="h-20"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {
                user
                &&
                <button
                    className="bg-[#E50914] mx-10 text-lg text-white text-medium px-4 py-2 rounded-md tracking-wider"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            }
        </div>
    )
}

export default Logo;