import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fast-post-back.onrender.com',
});
