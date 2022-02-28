import app from './src/app'
import mongoose from "mongoose";

const APP_PORT = process.env.PORT || 9000;
const DB_PORT = process.env.MONGO_URI || 'mongodb://localhost:27017/ourpass';


mongoose
    .connect(DB_PORT)
    .then(() => console.log("connected"))
    .catch(() => console.log("Error"));

app.listen(
  APP_PORT,
  console.log(`Server listening on http://localhost:${APP_PORT}`)
);