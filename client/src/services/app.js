import http from "../http-common.js"

class AppDataService {
  getAll() {
    return http.get(`/`);
  }
  get(id) {
    return http.get(`/id/${id}`);
  }
  // find(query, by = "name", page = 0) {
  //   return http.get(`?${by}=${query}&page=${page}`);
  // }
  createApp(data) {
    return http.post("/", data);
  }
  updateApp(data) {
    return http.put("/", data);
  }
  deleteApp(id) {
    console.log("id here: ", id)
    return http.delete(`/?id=${id}`);
  }
  // getCuisines(id) {
  //   return http.get(`cuisines`);
  // }
}

export default new AppDataService();