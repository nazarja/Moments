import { signInUser } from '../store/slices/userSlice';
import { dispatch } from "../store/storeConfig";
import axios from 'axios';

export const signInAuthService = async data => {
    try {
        const response = await axios.post('/api/dj-rest-auth/login/', data);
        dispatch(signInUser(response.data));
        return { successUrl: '/' };
    }
    catch (error) {
        return { errors: error.response.data };
    }
};

export const signUpAuthService = async data => {
    try {
        await axios.post('/api/dj-rest-auth/registration/', data);
        return { successUrl: '/signin' };
    }
    catch (error) {
        return { errors: error.response.data };
    }
};