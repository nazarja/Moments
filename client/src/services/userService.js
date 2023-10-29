import { signInUser, signOutUser } from '../store/slices/userSlice';
import { dispatch } from "../store/storeConfig";
import axios from 'axios';

export const signInService = async data => {
    try {
        const response = await axios.post('/api/dj-rest-auth/login/', data);
        dispatch(signInUser(response.data));
        return { successUrl: '/' };
    }
    catch (error) {
        return { errors: error.response.data };
    }
};

export const signUpService = async data => {
    try {
        await axios.post('/api/dj-rest-auth/registration/', data);
        return { successUrl: '/signin' };
    }
    catch (error) {
        return { errors: error.response.data };
    }
};


export const signOutService = async () => {
    try {
        await axios.post('/api/dj-rest-auth/logout/');
        dispatch(signOutUser());
    }
    catch (error) {
        console.log(data);
    }
};