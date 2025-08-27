import axios, { Axios } from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:5000',  //backend ka url
    withCredentials: true, // cookie ko allow karega 
});

export default API;