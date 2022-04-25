import express from "express"
import cors from "cors"
import apps from "./api/apps.route.js"
import auth from "./api/auth.route.js"
import { dirname } from "path"
import path from "path"
import { fileURLToPath } from 'url';

const app = express()

app.use(cors())
app.use(express.json())

// static file declaration
// if (process.env.NODE_ENV === 'production') {
  // production mode
  // }
  // api routes
  app.use("/api/v1/auth", auth)
  app.use("/api/v1/apps", apps)

  // views
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.use(express.static(path.resolve(__dirname, "./client/build")));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });

  // errors
  app.use("*", (req, res) => res.status(404).json({ error : "not found"}))


export default app