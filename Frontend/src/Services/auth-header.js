import axios from "./axios";

const axiosInstance = axios.create();

const refreshAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return axiosInstance.post("/api/refresh-token", {
    refreshToken: user.refreshToken,
  })
    .then((response) => {
      const { accessToken, accessTokenExpiration } = response.data;

      user.accessToken = accessToken;
      user.accessTokenExpiration = accessTokenExpiration;
      localStorage.setItem("user", JSON.stringify(user));

      return accessToken;
    })
    .catch((error) => {
      throw error;
    });
};

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      const accessTokenExpiration = user.accessTokenExpiration;
      const currentTime = Date.now();

      if (accessTokenExpiration && accessTokenExpiration > currentTime) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      } else {
        return refreshAccessToken()
          .then((newAccessToken) => {
            user.accessToken = newAccessToken;
            localStorage.setItem("user", JSON.stringify(user));

            config.headers.Authorization = `Bearer ${newAccessToken}`;

            return config;
          })
          .catch((refreshError) => {
            if (refreshError.response && refreshError.response.status === 400) {
              window.location.href = '/reglog';
            }
            throw refreshError;
          });
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;