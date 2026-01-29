import axios from 'axios';

const apiProducts = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
    withXSRFToken: true,
});

export default apiProducts;
