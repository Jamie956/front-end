import axios from "axios";

//创建axios实例和配置
const priAxios = axios.create({
  baseURL: "api/",
  timeout: 2500,
  headers: { Authorization: localStorage.getItem("userJWT") }
});

//请求拦截器
priAxios.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器
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
  order: {
    list: () => priAxios.get("order").then(res => res.data)
  }
};
