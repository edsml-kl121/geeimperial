import express from "express"
import appsCtrl from "./apps.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/id/:id").get(appsCtrl.apiGetAppById).put(appsCtrl.apiUpdateApp)
router.route("/").get(appsCtrl.apiGetApps).post(appsCtrl.apiPostApp).delete(appsCtrl.apiDeleteApp)

router.route("/review/id/:id").get(ReviewsCtrl.apiGetReviewById)
router.route("/review")
.post(ReviewsCtrl.apiPostReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

export default router