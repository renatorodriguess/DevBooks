import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-devbooks.vercel.app",
});

export default api;