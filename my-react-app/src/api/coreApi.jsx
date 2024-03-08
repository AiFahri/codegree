import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:8080/api/v1/login",
});

export { axiosInstance };
