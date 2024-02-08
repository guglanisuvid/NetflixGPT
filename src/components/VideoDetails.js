const VideoDetails = ({ title, overview }) => {

    return (
        <div className="absolute w-full aspect-video bg-gradient-to-r from-black text-white">
            <div
                className="w-2/5 px-10 translate-y-[64%]">
                <h1
                    className="font-bold text-6xl text-[#E50914]">
                    {title}
                </h1>
                <p
                    className="my-8">
                    {overview}
                </p>
                <button
                    className="text-lg text-black font-semibold px-8 py-2 rounded-md tracking-wider bg-white hover:bg-opacity-80">
                    Play
                </button>
                <button
                    className="text-lg text-white font-semibold px-8 py-2 rounded-md tracking-wider bg-white bg-opacity-40 mx-2">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoDetails;