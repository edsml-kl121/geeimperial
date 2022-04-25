import express from "express"
import appsCtrl from "./apps.controller.js"

const router = express.Router()

router.route("/id/:id").get(appsCtrl.apiGetAppById).put(appsCtrl.apiUpdateApp)
router.route("/").get(appsCtrl.apiGetApps).post(appsCtrl.apiPostApp).delete(appsCtrl.apiDeleteApp)


export default router