import Axios from "axios";

const params = {
  api_key: "59caaaf6db048b723bf9adf4f0380be1",
  language: "en-US"
};

const api = Axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

export const movieAPI = {
  getPopularMovie: () => api.get("/movie/popular", { params })
};
