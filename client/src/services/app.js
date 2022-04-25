import http from "../http-common.js"

class AppDataService {
  getAll() {
    return http.get(`apps/`);
  }
  get(id) {
    return http.get(`apps/id/${id}`);
  }
  // find(query, by = "name", page = 0) {
  //   return http.get(`?${by}=${query}&page=${page}`);
  // }
  createApp(data) {
    return http.post("apps/", data);
  }
  updateApp(data, id) {
    return http.put(`apps/id/${id}`, data);
  }
  deleteApp(id) {
    console.log("id here: ", id)
    return http.delete(`apps/?id=${id}`);
  }
  // getCuisines(id) {
  //   return http.get(`cuisines`);
  // }
}

export default new AppDataService();