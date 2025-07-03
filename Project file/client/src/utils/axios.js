import axios from "axios";

export const BASE_URL = "http://localhost:3001";
const axiosInst = axios.create({baseURL: BASE_URL})

axiosInst.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(
        (error.response && error.response.data) || "Something went wrong"
    )
)

export default axiosInst;