import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email?.current?.value, password?.current?.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                        }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="w-full bg-black">
                <img
                    className="w-full h-full opacity-40"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background Img"
                />
                <div
                    className="w-[30%] bg-black absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-20 py-16  rounded-lg bg-opacity-80">
                    <h1
                        className="text-3xl font-semibold tracking-wide text-white my-4"
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col">
                        {
                            !isSignInForm
                            &&
                            <input
                                ref={name}
                                className="p-3 bg-[#333333] rounded-md my-2 placeholder:text-[#8C8C8C] text-white"
                                type="text"
                                placeholder="Full Name" />
                        }
                        <input
                            ref={email}
                            className="p-3 bg-[#333333] rounded-md my-2 placeholder:text-[#8C8C8C] text-white"
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            ref={password}
                            className="p-3 bg-[#333333] rounded-md my-2 placeholder:text-[#8C8C8C] text-white"
                            type="password"
                            placeholder="Password"
                        />
                        <p className="text-[#E50914] text-sm">
                            {errorMessage}
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className="p-3 bg-[#E50914] text-white rounded-md my-6">
                            {
                                isSignInForm ? "Sign In" : "Sign Up"
                            }
                        </button>
                    </form>
                    <p
                        className="text-white cursor-pointer text-sm"
                        onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login