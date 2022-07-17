import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BACKEND_API,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config: any) => {
      // bottom line is required, if you are using react-query or something similar
      if (config.headers["Authorization"]) {
        config.headers["Authorization"] = null;
      }
      // config.headers["Authorization"] = "Bearer " + keycloak?.token;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  
  export default axiosInstance;