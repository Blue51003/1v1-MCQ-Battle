import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const signup = (formData) => API.post('register', formData);
export const login = (formData) => API.post('login', formData);

