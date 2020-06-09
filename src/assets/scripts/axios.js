import axios from 'axios';

const CONFIG = window.globalConfig;

const API_URL = CONFIG.API_URL;

const instance = axios.create({
    baseURL: API_URL + 'api/'
});

export default instance;