import express from "express";
import bodyParser from "body-parser";
import urlController from "./controller/url.controller";
import "dotenv/config";
import { processError } from "./utils/process-error";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hey There");
});

app.post("/encode", async (req, res) => {
  try {
    const response = await urlController.encode(req.body);
    res.json({ data: response });
  } catch (error) {
    processError(error)
  }
});

app.post("/decode", async (req, res) => {
  try {
    const response = await urlController.decode(req);
    res.json({ data: response });
  } catch (error) {
    processError(error)
  }
});

app.get('/statistic/:path', async (req, res) => {
  try {
    const { path } = req.params
    const response = await urlController.getStatistic(path);
    res.json({ data: response });
  } catch (error) {
    processError(error)
  }
})

export default app;
