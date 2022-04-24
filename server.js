import express from "express"
import cors from "cors"
import apps from "./api/apps.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/apps", apps)
app.use("*", (req, res) => res.status(404).json({ error : "not found"}))

export default app