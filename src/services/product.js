import { request, } from 'utils/request';

const fetchProduct = async (key, page) => {
    const { data } = await request().get(`/all/${page}`);

    return data;
};

const showDetailProduct = async (key, id) => {
    const { data } = await request().get(`/product/${id}`);

    return data;
};


export default {
    fetchProduct, showDetailProduct
}