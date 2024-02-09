const VideoDetails = ({ title, overview }) => {

    return (
        <div className="absolute w-full aspect-video bg-gradient-to-r from-black text-white">
            <div
                className="absolute md:relative md:w-2/5 px-4 md:px-10 translate-y-full md:-translate-y-1/2 md:-bottom-1/2 -bottom-2">
                <h1
                    className="font-bold text-2xl md:text-6xl text-[#E50914]">
                    {title}
                </h1>
                <p
                    className="hidden md:inline-block my-8">
                    {overview}
                </p>
                <div
                    className="my-4 md:my-0">
                    <button
                        className="text-sm md:text-lg text-black font-semibold px-8 py-2 rounded-md tracking-wider bg-white hover:bg-opacity-80">
                        Play
                    </button>
                    <button
                        className="text-sm md:text-lg text-white font-semibold px-8 py-2 rounded-md tracking-wider bg-white bg-opacity-40 mx-2">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoDetails;