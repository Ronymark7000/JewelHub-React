import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "http://localhost:8081/api",
  headers: {
    Authorization: localStorage.getItem("token") || "",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
