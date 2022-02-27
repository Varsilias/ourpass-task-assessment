import express from "express";
import bodyParser from "body-parser";
import urlController from "./controller/url.controller";
import "dotenv/config";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hey There");
});

app.post("/encode", async (req, res) => {
  try {
    const response = await urlController.encode(req.body);
    res.json(response);
  } catch (error) {
    if (error === undefined) {
      return;
    } else {
      res.status(500).json(error.details[0].message);
    }
  }
});

app.post("/decode", async (req, res) => {
  try {
    const response = await urlController.decode(req.body);
    res.json(response);
  } catch (error) {
    if (error === undefined) {
      return;
    } else {
      res.status(500).json(error.details[0].message);
    }
  }
});

export default app;
