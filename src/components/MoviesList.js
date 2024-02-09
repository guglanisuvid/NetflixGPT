import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {

    return (
        <div>
            <h2
                className="text-white text-xl md:text-3xl font-semibold tracking-wider my-4 md:my-8">
                {title}
            </h2>
            <div
                className="flex flex-col overflow-x-scroll pr-4 md:pr-10 no-scrollbar">
                <div
                    className="w-max flex gap-2">
                    {movies?.map(movie => <MovieCard key={movie.id} poster_path={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;