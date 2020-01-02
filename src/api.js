import axios from "axios";

const TvPopularParams = {
  api_key: "59caaaf6db048b723bf9adf4f0380be1",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const getMovie = async () =>
  await api.get("tv/popular", { params: TvPopularParams });
getMovie();

export default api;
