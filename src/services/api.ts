import axios from "axios";

export const api = axios.create({
    baseURL:"https://course-selling-app-g026.onrender.com/api/v1"
})