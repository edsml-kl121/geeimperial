import http from "../http-common.js"

class AuthDataService {
  getAll() {
    return http.get(`/auth/login`);
  }
  LoginAuth(data) {
    return http.post("/auth/login", data);
  }
  RegisterAuth(data) {
    return http.post("/auth/register", data);
  }
}

export default new AuthDataService();