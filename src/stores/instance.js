import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://secret-tundra-53961.herokuapp.com",
});

export default instance;
