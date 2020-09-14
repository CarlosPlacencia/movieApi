// Populate the databse with all the movies in the JSON file
if(process.env.NODE_ENV !== 'production'){require('dotenv').config()}

import theMovies from './myMovies.json'
import { Movie } from '../resources/movie/movie.model'
import { databaseConnection } from '../utils/dbConnection.js';

async function saveMoviestoDatabase(){
    try{
        await databaseConnection(); // Make database connection

        for(let i = 0; i < theMovies.length; i++){
            let mov = new Movie({
                title: theMovies[i].title,
                summary: theMovies[i].summary,
                popularity: parseFloat(theMovies[i].popularity),
                releaseDate: theMovies[i].releaseDate,
                runtime: parseFloat(theMovies[i].runtime),
                voteAverage: parseFloat(theMovies[i].voteAverage)
            })
            // console.log(mov);
            await mov.save();
        }

        console.log("##### Done #####");

    } catch (e) {
        console.log(e);
    }
}

saveMoviestoDatabase();
