import axios from "axios";

export const axiosInterceptor = axios.create({
  baseURL: "https://sp-taskify-api.vercel.app/2-9/",
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
    const accessToken = cookieValue;

    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
