import express from "express"
import authCtrl from "./auth.controller.js"

const router = express.Router()

// router.route("/id/:id").get(appsCtrl.apiGetAppById).put(appsCtrl.apiUpdateApp)
router.route("/login").get(authCtrl.apiGetUsers).post(authCtrl.apiPostLogin)
router.route("/register").post(authCtrl.apiPostRegister)


export default router