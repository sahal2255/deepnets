import axios from "axios";

// The free tier of Vercel does not support environment variables (.env), which may cause issues with configuration and deployment.
const axiosInstance = axios.create({
  baseURL:'https://product-alpha-gray.vercel.app'||'http://localhost:3005', 
  withCredentials: true,
});

export default axiosInstance;
