'use client'

import axios from "@/node_modules/axios/index"
import Cookies from "js-cookie";

const api = axios.create({
    baseURL:'http://localhost:8080'
});

api.interceptors.request.use(
    (config) =>{
        const token = Cookies.get('token');

        if(token){
            config.headers.Authorization =`Bearer ${token}`;
        }

        return config;
    }
);

export default api;