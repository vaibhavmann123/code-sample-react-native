import axios from 'axios';
export const baseURL = 'http://3.23.245.115/maharaja-hotel/api/v1';
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  validateStatus: function (status) {
    return status == 200 || status === 403;
  },
});

export const postCall = (url, data, headers) => {
  return axiosInstance
    .post(url, data, headers)
    .then(res => res)
    .catch(err => err);
};
export const getCall = (url, headers) => {
  return axiosInstance
    .get(url, headers)
    .then(res => res)
    .catch(err => err);
};
