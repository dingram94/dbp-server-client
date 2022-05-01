import axios from 'axios';
export default axios.create({
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*",
        "x-access-token": ""
    }
});