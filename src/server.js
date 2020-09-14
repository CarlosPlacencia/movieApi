// Declaring routes & Preaparing server connection

if(process.env.NODE_ENV !== 'production'){require('dotenv').config()}

import express from 'express'
import { databaseConnection } from './utils/dbConnection.js';
import { json, urlencoded } from 'body-parser';

// Routes
import movieRouter from './resources/movie/movie.router';

const app = express();

app.disable('x-powered-by')

app.use(json())
app.use(urlencoded({ extended: true }))


app.use('/api/movies', movieRouter);


export const start = async () => {
    try{
        await databaseConnection(); // Make database connection
        app.listen(process.env.PORT, () => {
            console.log(`REST API running on http://localhost:${process.env.PORT}/api`);
        });

        process.on('SIGINT', () => { // Quit process "gracefully"
            process.exit();
        });

    } catch (e) {
        console.log(e);
    }
}