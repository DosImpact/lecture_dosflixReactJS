import React from "react";
import Axios from "axios";

//위치정보를 얻어오기.
//API를 호출해서 날씨정보 얻어 오기.

class Api extends React.Component {
  API_KEY = "5478ba6582be8963c227dd6cb6136cb2";

  state = {
    isLoading: true,
    hasLocation: false,
    lat: "",
    lon: ""
  };
  handleGeoSuccess = position => {
    const lat = Math.round(position.coords.latitude);
    const lon = Math.round(position.coords.longitude);
    this.setState({ hasLocation: true, lat, lon });
    console.log(this.state);
    this.getWeather();
  };
  handleGeoError = () => {
    this.setState({ hasLocation: false });
  };
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      this.handleGeoSuccess,
      this.handleGeoError
    );
  };
  getWeather = async () => {
    const {
      data: { weather, main }
    } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.API_KEY}&units=metric`
    );
    console.log(weather, main);
    this.setState({ isLoading: false, weather, main });
  };
  componentDidMount() {
    this.getLocation();
    //this.getWeather();
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>api Loading...</h1>
        ) : (
          <div>
            <h1>complete</h1>
            <div>
              <div>현재날씨: {this.state.main.temp}</div>
              <div>체감기온: {this.state.main.feels_like}</div>
              <div>최저 기온: {this.state.main.temp_min}</div>
              <div>최고 기온: {this.state.main.temp_max}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Api;
