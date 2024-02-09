export const LOGO = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg";

export const TMDB_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
};

export const BACKDROP_IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hi", name: "हिंदी" },
    { identifier: "de", name: "Deutsch" },
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;