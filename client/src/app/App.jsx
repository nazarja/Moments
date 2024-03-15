import { useEffect, useMemo } from 'react';
import useRefreshAuth from '../hooks/useRefreshAuth';
import axios from 'axios';

const App = ({ children }) => {

    useEffect(() => {
        (async () => await useRefreshAuth())();
    }, []);

    useMemo(() => {
        axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
        axios.defaults.withCredentials = true;

        axios.interceptors.request.use(
            async config => {
                await useRefreshAuth();
                return config;
            },
            error => Promise.reject(error));

        axios.interceptors.response.use(
            response => response,
            async error => {
                if (error.response?.status == 401) {
                    await useRefreshAuth();
                    return axios(err.config);
                }

                if (error.response?.status == 404) {
                    window.location.href = '/404';
                    return axios(err.config);
                };

                return Promise.reject(error);
            });
    }, []);

    return <>{children}</>;
};

export default App;