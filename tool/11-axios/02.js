import axios from "axios";

const priAxios = axios.create({
  baseURL: "api/",
  timeout: 2500,
  headers: { Authorization: localStorage.getItem("userJWT") }
});

const pubAxios = axios.create({
  baseURL: "api/",
  timeout: 2500
});

priAxios.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

priAxios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  user: {
    login: data => pubAxios.post("login", data).then(res => res.data.user),
    signup: user => pubAxios.post("logout", user).then(res => res.data)
  },
  order: {
    list: () => priAxios.get("order").then(res => res.data)
  }
};
