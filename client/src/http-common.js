import axios from "axios";

var url;

if (process.env.NODE_ENV === "development") {
  url = "http://localhost:5000/api/v1/apps";
} else {
  url = "/api/v1/apps";
}

export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json"
  }
});