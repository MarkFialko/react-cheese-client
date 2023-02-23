import axios from "axios"
import {AuthResponse} from "../models/response/AuthResponse";
import {toast} from "react-toastify";
import promise = toast.promise;

export const API_URL = "https://react-cheese-server-production.up.railway.app"

console.log('proccess.env.NODE-ENV: ', process.env.NODE_ENV)

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {

    const originalRequest = error.config
    console.log(error)
    console.log(error.response)
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        console.log('response status is ',error.response.status)
        originalRequest._isRetry = true
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem("token", response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error
})

export default $api;