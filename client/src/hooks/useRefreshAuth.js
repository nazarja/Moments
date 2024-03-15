import axios from 'axios';
import { store } from '../store/storeConfig';
import { dispatch } from '../store/storeConfig';
import { signOutService } from '../services/userService';
import { updateAccessExpiry } from '../store/slices/userSlice';

const axiosAccess = axios.create();

const useRefreshAuth = async () => {
    const { auth: { isAuthenticated, access_expiry } } = store.getState().user;

    if (isAuthenticated && (access_expiry < new Date().toISOString())) {
        try {
            const response = await axiosAccess.post("/api/dj-rest-auth/token/refresh/");
            dispatch(updateAccessExpiry(response.data));
        }
        catch (error) {
            console.log(error);
            signOutService();
        }
    };
};

export default useRefreshAuth;