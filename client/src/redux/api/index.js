import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.authorization = `Bearer ${localStorage.getItem("profile")}`;
//   }
//   return req;
// });

// const config = {
//   headers: {
//     "content-type": "multipart/form-data",
//   },
// };

export const signIn = (email, password) =>
  API.post("user/login", { email, password });

export const signUp = (data) =>
  API.post("user/register", {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
    linkedinProfile: data.get("linkedinProfile"),
    company: data.get("company"),
    mobileNum: data.get("mobileNum"),
    univ_attended: data.get("univ_attended"),
  });

export const getFriends = (userID) =>
  API.post("friend/getAll", { userID: userID });
