import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import AppsDAO from "./dao/appsDAO.js"
import AuthDAO from "./dao/authDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client => {
  await AppsDAO.injectDB(client)
  await AuthDAO.injectDB(client)
  await ReviewsDAO.injectDB(client)
  app.listen(port, () => {
    console.log(`Listening to port ${port}`)
  })
})
