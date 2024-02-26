import axios from 'axios';

export const createPostService = async data => {
    try {
        const response = await axios.post('/api/posts/', data);
        return { successUrl: `/posts/${response.data.id}/` };
    }
    catch (error) {
        return { errors: error.response.data };
    }
};

export const getPostService = async id => {
    try {
        const response = await axios.get(`/api/posts/${id}/`);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};