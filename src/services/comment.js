import { request, } from 'utils/request';

const fetchComment = async (key, productId) => {
    const { data } = await request().get(`/comment/${productId}`);

    return data;
};

const addComment = async (key, productId) => {
    const { data } = await request().get(`/comment/${productId}`);

    return data;
};


export default {
    fetchComment, addComment
}