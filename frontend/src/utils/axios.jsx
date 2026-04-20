import axios from "axios"

const instance = axios.create({
   baseURL: "https://e-commerce-backend-aslv.onrender.com/api",
   withCredentials: true,
});

export default instance