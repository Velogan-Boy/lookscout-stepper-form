import axios from 'axios';

const api = axios.create({
   baseURL: 'https://digilabs-admin-panel.onrender.com/api',
   headers: {
      'Content-Type': 'application/json',
   },
});

export default api;
