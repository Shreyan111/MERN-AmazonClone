import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-amazon-backend.herokuapp.com",
  // baseURL: "http://localhost:8000/",
});

export default instance;
