import axios from "axios";
import store from "@/store/index.js";
import {logout} from "@/store/authActions.js";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(function (config) {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        store.dispatch(logout());

        history.push('/login');
        alert('Sesi Anda telah berakhir. Silakan login kembali.');

        return Promise.reject(error);
    }
    return Promise.reject(error);
});


export default instance;