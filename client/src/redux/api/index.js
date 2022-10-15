import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});

const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export const signIn = (email, password) =>
  API.post("user/login", { email, password });
export const signUp = (email, password, name) =>
  API.post("/user/register", { email, password, name });


