import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (!error.response) error.message = "Não foi possível conectar ao servidor";
    return Promise.reject(error);
  },
);

export default api;