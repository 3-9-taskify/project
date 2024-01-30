import axios from "axios";

const instance = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/2-9/",
  withCredentials: true,
});

// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = getToken();

//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Authorization'] = `Bearer ${accessToken}`;

//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(res => res, async (error) => {
//   const originalRequest = error.config;
//   if (error.response?.status === 401 && !originalRequest._retry) {
//     await instance.post('/auth/token/refresh', undefined, { _retry: true });
//     originalRequest._retry = true;
//     return instance(originalRequest);
//   }
//   return Promise.reject(error);
// });

export default instance;
