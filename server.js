import express from "express"
import cors from "cors"
import apps from "./api/apps.route.js"

const app = express()

app.use(cors())
app.use(express.json())

// static file declaration
// if (process.env.NODE_ENV === 'production') {
  // production mode
  // }
  app.use("/api/v1/apps", apps)
  app.use(express.static("client/build"));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.path(__dirname, '../build'));
  // });
  app.use("*", (req, res) => res.status(404).json({ error : "not found"}))


export default app