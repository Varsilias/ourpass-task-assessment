import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import UrlModel from "./models/url.model";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("Hey There");
});

export default app;
