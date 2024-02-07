import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {

    return (
        <div>
            <h2
                className="text-white text-3xl font-semibold tracking-wider my-8">
                {title}
            </h2>
            <div
                className="flex gap-2 overflow-x-scroll no-scrollbar">
                {movies?.map(movie => <MovieCard key={movie.id} poster_path={movie?.poster_path} />)}
            </div>
        </div>
    )
}

export default MoviesList;