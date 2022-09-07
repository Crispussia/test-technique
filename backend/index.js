
import express from "express"
const app = express()

import router from "./routes/routes.js"
const PORT = 3001

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.use("/api/postes",router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})