import axios from 'axios';

// https://fast-post-back.onrender.com

export const api = axios.create({
  baseURL: 'https://fast-post-back.onrender.com',
});
