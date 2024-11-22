// Khai báo thư viện axios
import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default instanceAxios;
