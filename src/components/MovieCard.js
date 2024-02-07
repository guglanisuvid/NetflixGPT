import { BACKDROP_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {

    return (
        <img
            src={BACKDROP_IMG_CDN_URL + poster_path}
            alt="Movie Backdrop Img" />
    );
};

export default MovieCard;