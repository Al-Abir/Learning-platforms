import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
 
});

// 🛠 interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      try {
        const accessToken = JSON.parse(token);
        config.headers.Authorization = `Bearer ${accessToken}`;
      } catch (err) {
        console.error("Token parse error", err);
      }
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
