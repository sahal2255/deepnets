import axios from "axios";

const axiosInstance = axios.create({
  baseURL:'https://product-alpha-gray.vercel.app'||'http://localhost:3005', 
  withCredentials: true,
});

export default axiosInstance;
