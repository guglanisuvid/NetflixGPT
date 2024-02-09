# Netflix GPT

A Netflix clone, built with React , Firebase and Styled-Components.

**Note** - The name of the project is NetflixGPT but I have used the Google's Gemini API beacause to some issues with the OPENAI API.

## Live

[https://netflixgpt-by-suvid.web.app/](https://netflixgpt-by-suvid.web.app/)

## Technologies

- `JavaScript`
- `React.js`
- `Redux.js`
- `TailwindCSS`
- `Firebase`

## Features

- Authentication
- Respoonsive
- MultiLanguage
- User-Friendly Interface

## Process

I started by making the SignIn / SignUp page, focusing on making it very similar to NETFLIX.

Then I worked upon the Validation and Authentication of the user setting up the firebase environment for the app.

Next, I built the Home Page. Starting with the Header, followed by the Hero Movie Section and The and Secondary Movies Section consisting of "Now Playing Movies", "Popular Movies", "Top Rated Movies" and "Upcoming Movies".

All the data of the movies on the home page is fetched using the TMDB API.

After that I moved on to the search page creating the search bar followed by the searched movies suggestions. I used the Google's Gemini API to search for the movies based on the query given by the user. And to show the movie results to the user based on the searched query, TMDB API is used.

All the movie results fetched on the Home Page and the Browse Page are stored in a Redux Store integrated inside the app.

After that I focused on the Multilingual feature which only works for the search bar on the search page as of now and then made the SignOut button working.

At last I tried to make app responsive (the app is yet not fully responsive).

## Learnings

By creating this app I came to learn many new things. Some of my new learnings from this project are listed below:

- TailwindCSS
- Setting up the firebase app and integrating it to our app
- Authentication and Validation
- useRefHook in React
- Creating reusable components
- Integrating the redux store with our app and using it to store & retrieve data from our store.
- Creating custom hooks
- Writing modular code
- Memoization
- Making the app multilingual
- Creating responsive deign in tailwind css

## Improvements

- Making the multilanguage feature for the complete app
- Making the app fully responsive
- Creating components for showing information of individual movies
- Adding more categories for movies and also including series and shows
- Generating more specific and custom results for the user using Google's Gemini API

## Running the project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` in the project directory to install the required dependencies.
3. Run `npm run start` to get the project started and run it on your local machine.
4. Start editing the project and add new features to the project.



## Image

![img](https://github.com/guglanisuvid/NetflixGPT/assets/132701414/20a629e2-52a4-4799-9196-a237d84b0744)

## Video

https://github.com/guglanisuvid/NetflixGPT/assets/132701414/a2417cf2-edcb-419f-85a5-7d1bb455aa19
