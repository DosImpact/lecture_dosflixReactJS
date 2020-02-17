import axios from "axios";

const API_KEY = "5478ba6582be8963c227dd6cb6136cb2";

const params = {
  APPID: API_KEY,
  units: "metric"
};
const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/"
});

export const WeatherApi = {
  getWeather: (latitude, longitude) =>
    api.get("weather", {
      params: { ...params, lat: latitude, lon: longitude }
    })
};
