import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let users 

export default class AuthDAO {
  static async injectDB(conn) {
    if (users) {
      return
    }
    try {
      users = await conn.db(process.env.RESTREVIEWS_NS).collection("users")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in appsDAO: ${e}`,
      )
    }
  }

  static async getUsers() {
    let query = {}

    let cursor
    
    try {
      cursor = await users
      .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { usersLists: [], totalNumUsers: 0 }
    }

    try {
      const usersLists = await cursor.toArray()
      const totalNumUsers = await users.countDocuments(query)
      return { usersLists, totalNumUsers }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { usersLists: [], totalNumusers: 0 }
    }
  }
  static async addLogin(email, password) {
    try {
      const userDoc = { 
        // _id: ObjectId("62668ec33216bf927c288e9b"),
        "email": email
      }
      console.log(email, password)
      let result = await users.findOne(userDoc)
      console.log(result)
      if (result.email) {
        if (password === result.password) {
          return "login success"
        }
        else {
          return "Wrong credentials"
        }
      } else {
        return "not registered"
      }
    } catch (e) {
      console.error(`Unable to login review: ${e}`)
      return { error: e }
    }
  }

  static async RegisterLogin(name, email, password) {
    try {
      console.log("hi")
      const queryCheck = { 
        // _id: ObjectId("62668ec33216bf927c288e9b"),
        "email": email
      }
      const userInfo = {
        "name": name,
        "email": email,
        "password": password
      }
      let result = await users.findOne(queryCheck)
      console.log(result)
      if (result) {
        return "user already exist with this email"
      } else {
        return await users.insertOne(userInfo)
      }
    } catch (e) {
      console.error(`Unable to register user: ${e}`)
      return { error: e }
    }
  }
}