import axios from 'axios';

const productionUrl = 'https://purr-and-paddle-api.onrender.com/';

export const customFetch = axios.create({
    baseURL: productionUrl,
});
