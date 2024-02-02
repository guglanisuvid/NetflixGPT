import Header from "./Header"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.log("An Error Occured");
        });
    }

    return (
        <div className="w-full bg-slate-300">
            <Header />
            <button
                className="text-lg text-red-600 mx-10 mt-[80px]"
                onClick={handleSignOut}
            >
                Sign Out
            </button>
        </div>
    )
}

export default Browse