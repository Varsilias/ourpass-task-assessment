import { Schema, model } from "mongoose";

const UrlSchema = new Schema({
  url: { type: String, required: true },
  shorty: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date().toISOString() },
  lastVisited: { type: Date, default: null },
  visitHistory: [{ ipAddress: String, location: String, browser: String }]
});

const UrlModel = model("UrlModel", UrlSchema);
export default UrlModel;

// IP Address of Visitor
// Location of Visitor
// Browser Type
