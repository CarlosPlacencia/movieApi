import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        summary:{
            type: String,
            required: true
        },
        popularity:{
            type: Number,

        },
        releaseDate: {
            type: Date,

        },
        runtime: {
            type: Number,

        },
        voteAverage: {
            type: Number,

        },
    }
)

export const Movie = mongoose.model('movie', movieSchema);