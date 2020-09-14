import mongoose from 'mongoose';

export const databaseConnection = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
}