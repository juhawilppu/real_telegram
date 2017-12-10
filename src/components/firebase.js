import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://juhawilppu-105ce.firebaseio.com'
});

instance.interceptors.request.use(request => {
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;