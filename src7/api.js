import Axios from "axios";

const movieAPIparams = {
  api_key: "59caaaf6db048b723bf9adf4f0380be1",
  language: "en-US"
};

let tistoryAPIparams = {
  access_token: ""
};

const movieDBAPI = Axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const tistoryDBAPI = Axios.create({
  baseURL: "https://www.tistory.com/"
});
export const movieAPI = {
  getPopularMoive: () =>
    movieDBAPI.get("/movie/popular", { params: { ...movieAPIparams } })
};
export const tistoryAPI = {
  setACTOKEN: AC => {
    tistoryAPIparams.access_token = AC;
    console.log(`Setting AC Token to : ${tistoryAPIparams.access_token}`);
    return true;
  },
  getAccessURL: () =>
    `https://www.tistory.com/oauth/authorize?client_id=ec5864d80bcf61d0ca7279c89a3affc8&redirect_uri=https:%2F%2Fplasmacodeing.tistory.com%2F&response_type=token`,
  getBlogInfo: () =>
    tistoryDBAPI.get("/apis/blog/info", {
      params: { ...tistoryAPIparams, output: "json" }
    })
};
