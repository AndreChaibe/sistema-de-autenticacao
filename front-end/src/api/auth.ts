import api from "./axios-instance.js";
import type { AuthData } from "../api/authSchema.js";

function login(data: AuthData) {
  return api.post("/login", data);
}

function register(data: AuthData) {
  return api.post("/register", data);
}

export { login, register };
