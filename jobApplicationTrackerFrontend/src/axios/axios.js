import axios from "axios";


const baseURL = "http://backend-service:8080/api";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
