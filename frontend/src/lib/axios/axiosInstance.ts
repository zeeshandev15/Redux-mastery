import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    "Content-Type": "application/json",
  },
});

// smart interceptor
axiosInstance.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config;
});

export default axiosInstance;
