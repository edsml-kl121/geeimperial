import express from "express"
import appsCtrl from "./apps.controller.js"

const router = express.Router()

router.route("/id/:id").get(appsCtrl.apiGetAppById).delete(appsCtrl.apiDeleteApp).put(appsCtrl.apiUpdateApp)
router.route("/").get(appsCtrl.apiGetApps).post(appsCtrl.apiPostApp)

export default router