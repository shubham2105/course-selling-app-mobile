import axios from "axios";
import { storage } from "../storage/mmkv";

export const api = axios.create({
    baseURL:"https://course-selling-app-g026.onrender.com/api/v1"
});

api.interceptors.request.use(config => {
    const token = storage.getString("token");

    if(token){
        config.headers.Authorization = token;
    }
    return config;
})