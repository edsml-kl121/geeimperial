import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let apps 

export default class AppsDAO {
  static async injectDB(conn) {
    if (apps) {
      return
    }
    try {
      apps = await conn.db(process.env.RESTREVIEWS_NS).collection("apps")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in appsDAO: ${e}`,
      )
    }
  }

  static async getApps({
    filters = null,
    // page = 0,
    // restaurantsPerPage = 20,
  } = {}) {
    let query
    console.log("name" in filters)
    if (filters) {
      if ("name" in filters) {
        // query = { $text: { $search: filters["name"] } }
        query = { "name": { $eq: filters["name"] } }
        console.log(query)
      // } else if ("cuisine" in filters) {
      //   query = { "cuisine": { $eq: filters["cuisine"] } }
      // } else if ("zipcode" in filters) {
      //   query = { "address.zipcode": { $eq: filters["zipcode"] } }
      }
    }

    let cursor
    
    try {
      cursor = await apps
      .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { appsLists: [], totalNumApps: 0 }
    }

    // const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page)

    try {
      // const restaurantsList = await displayCursor.toArray()
      // const totalNumRestaurants = await restaurants.countDocuments(restaurants)
      const appsLists = await cursor.toArray()
      const totalNumApps = await apps.countDocuments(query)

      return { appsLists, totalNumApps }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { appsLists: [], totalNumApps: 0 }
    }
  }

  static async getAppByID(id) {
    try {
      let myquery = { _id: ObjectId( id)};
      let result = apps.findOne(myquery)
      console.log(result)
      return result
      // await apps.findOne("_id": ObjectId(id), (wa))
    } catch (e) {
      console.error(`Something went wrong in getAppByID: ${e}`)
      throw e
    }
  }

  static async addApp(name, link, date) {
    try {
      const appDoc = { 
          name: name,
          link: link,
          date: date,
      }
      return await apps.insertOne(appDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async updateApp(id, name, link) {
    try {
      // const check = await apps.findOne({"_id": ObjectId(id)})
      // console.log(_id);
      const updateResponse = await apps.updateOne(
        {_id: ObjectId(id)},
        { $set: { name: name, link: link  } },
      )
      return updateResponse
    } catch (e) {
      console.error(`Unable to update review: ${e}`)
      return { error: e }
    }
  }

  static async deleteApp(id) {
    try {
      const deleteResponse = await apps.deleteOne({
        _id: ObjectId(id),
      })
      console.log(id)
      console.log(Object(id))

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete app: ${e}`)
      return { error: e }
    }
  }
}

