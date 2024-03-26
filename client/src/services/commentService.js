import axios from 'axios';

export const getCommentsService = async id => {
    try {
        const response = await axios.get(`/api/comments/?post=${id}`);
        return [...response.data.results];
    }
    catch (error) {
        console.log(error);
        return [];
    }
};