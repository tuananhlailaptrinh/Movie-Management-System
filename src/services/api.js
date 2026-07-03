import axios from 'axios';

// Khởi tạo một instance axios cấu hình sẵn baseURL của json-server
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
