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
        return response.data;
    }
    catch (error) {
        console.log(error);
        return null;
    }
};

export const getPostsService = async () => {
    try {
        const response = await axios.get(`/api/posts/`);
        return response.data.results;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};