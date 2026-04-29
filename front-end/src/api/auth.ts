import api from "./axios-instance.js";

interface AuthData {
  username: string;
  password: string;
}

function login(data: AuthData) {
  return api.post("/login", data);
}

function register(data: AuthData) {
  return api.post("/register", data);
}

export { login, register, type AuthData };
