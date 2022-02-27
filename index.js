import express from 'express'
import 'dotenv/config'


const APP_PORT = process.env.PORT
const app = express()


app.get('/', (req, res) => {
  res.send('Hey There')
})


app.listen(APP_PORT, console.log(`Server listening on http://localhost:${APP_PORT}`))