import AuthDAO from "../dao/authDAO.js"

export default class AuthController {
  static async apiGetUsers(req, res, next) {
    let filters = {}
    const { usersLists, totalNumUsers } = await AuthDAO.getUsers()
    let response = {
      users: usersLists,
      total_results: totalNumUsers,
    }
    res.json(response)
  }

  static async apiPostLogin(req, res, next) {
    try {
      const {email, password} = req.body;
      // const name = req.body.name
      const LoginRes = await AuthDAO.addLogin(
        email,
        password
      )
      res.json({ status: LoginRes })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
  static async apiPostRegister(req, res, next) {
    try {
      // let id = req.params.id
      const {name, email, password} = req.body

      // console.log(name, link)
      const RegResponse = await AuthDAO.RegisterLogin(
        name,
        email,
        password,
      )
      res.json({ status: RegResponse })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}