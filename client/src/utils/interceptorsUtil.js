import axios from 'axios';
import { refreshAuth } from './refreshAuthUtil';

export const interceptors = () => {
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.withCredentials = true;

    axios.interceptors.request.use(
        async config => {
            await refreshAuth();
            return config;
        },
        error => Promise.reject(error));

    axios.interceptors.response.use(
        response => response,
        async error => {
            if (error.response?.status == 401) {
                await refreshAuth();
                return axios(err.config);
            }
            return Promise.reject(error);
        });
};