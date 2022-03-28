import app from './src/app'
import mongoose from "mongoose";

/**
 * If no MONGO_URI environment variable is not set in the docker-compose file
 * the alternativeMongoUri will be use to connect to the mongo container
 */
const alternativeMongoUri = 'mongodb://mongodb:27017'


const APP_PORT = process.env.PORT || 9000;
const DB_PORT = process.env.MONGO_URI || alternativeMongoUri;


mongoose
    .connect(DB_PORT)
    .then(() => console.log("connected"))
    .catch(() => console.log("Error"));

app.listen(
  APP_PORT,
  console.log(`Server listening on http://localhost:${APP_PORT}`)
);