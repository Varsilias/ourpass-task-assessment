import { Schema, model } from 'mongoose'

const UrlSchema = new Schema({
  fullUrl: { type: String, required: true },
  shorty: { type: String, required: true  },
  clicks: { type: Number},
  createdAt: { type: Date, default: new Date().toISOString() },
  lastVisited: { type: Date },
  visitedFrom: { type: String, required: true}
})

const UrlModel = model('Url', UrlSchema)
export default UrlModel