import { BACKDROP_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {

    return (
        poster_path
        &&
        <div
            className="w-[100px] md:w-[160px]">
            <img
                src={BACKDROP_IMG_CDN_URL + poster_path}
                alt="Movie Backdrop Img"
            />
        </div>
    );
};

export default MovieCard;