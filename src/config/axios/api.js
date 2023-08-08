import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",

  },
});

Api.interceptors.request.use((config) => {
  const _token = localStorage.getItem("token");
  console.log(_token);
  if (_token && config.headers) {
    config.headers.Authorization =  _token.toString();
  }
  return config;
});

Api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error && error.response) {
      return error.response;
    }
    return { status: 500, data: null };
  }
);

export default Api;
