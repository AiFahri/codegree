import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://codegree-9ae0db37e15c.herokuapp.com/api/v1",
});

export { axiosInstance };
