import AppsDAO from "../dao/appsDAO.js"

export default class AppsController {
  static async apiGetApps(req, res, next) {
    // const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20
    // const page = req.query.page ? parseInt(req.query.page, 10) : 0
    let filters = {}
    // if (req.query.cuisine) {
    //   filters.cuisine = req.query.cuisine
    // } else if (req.query.zipcode) {
    //   filters.zipcode = req.query.zipcode
    // } else if (req.query.name) {
    //   filters.name = req.query.name
    // }
    if (req.query.name) {
      filters.name = req.query.name
    }
    console.log(filters)
    const { appsLists, totalNumApps } = await AppsDAO.getApps({
      filters,
      // page,
      // restaurantsPerPage,
    })
    // const appsList = ["test"]
    // const totalNumApps = 3
    console.log(appsLists)
    let response = {
      apps: appsLists,
      // page: page,
      // filters: filters,
      // entries_per_page: restaurantsPerPage,
      total_results: totalNumApps,
    }
    res.json(response)
  }

  static async apiGetAppById(req, res, next) {
    try {
      let id = req.params.id || {}
      console.log(id)
      let app = await AppsDAO.getAppByID(id)
      if (!app) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(app)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiPostApp(req, res, next) {
    try {
      // let id = req.params.id
      console.log(req.body)
      const name = req.body.name
      const link = req.body.link
      const date = new Date()

      // console.log(name, link)
      const AppResponse = await AppsDAO.addApp(
        name,
        link,
        date,
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiUpdateApp(req, res, next) {
    try {
      const id = req.params.id
      const name = req.body.name
      const link = req.body.link

      const appResponse = await AppsDAO.updateApp(
        id,
        name,
        link
      )
      // console.log(id, name, link)

      var { error } = appResponse
      if (error) {
        res.status(400).json({ error })
      }
      if (appResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review - user may not be original poster",
        )
      }

      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiDeleteApp(req, res, next) {
    try {
      // const reviewId = req.query.id
      // const userId = req.body.user_id
      const id = req.params.id
      const reviewResponse = await AppsDAO.deleteApp(
        id
      )
      res.json({ status: "delete success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}