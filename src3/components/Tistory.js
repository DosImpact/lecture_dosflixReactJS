//https://www.tistory.com/oauth/authorize?client_id=ec5864d80bcf61d0ca7279c89a3affc8&redirect_uri=https://plasmacodeing.tistory.com/&response_type=token
import React from "react";
import Axios from "axios";
import NewWindow from "react-new-window";

class Tistory extends React.Component {
  state = {
    Loading: true
  };
  getAccessToken = async () => {
    const result = await Axios.get(
      "https://www.tistory.com/oauth/authorize?client_id=ec5864d80bcf61d0ca7279c89a3affc8&redirect_uri=https://plasmacodeing.tistory.com/&response_type=token"
    );
    console.log(result);
    this.setState({ Loading: false });
  };
  componentDidMount() {
    this.getAccessToken();
  }
  render() {
    return (
      <>
        {this.state.Loading ? (
          <>
            {" "}
            <div>Loading...</div>
            <NewWindow url="https://www.tistory.com/oauth/authorize?client_id=ec5864d80bcf61d0ca7279c89a3affc8&redirect_uri=https://plasmacodeing.tistory.com/&response_type=token">
              <h1>Hi 👋</h1>
            </NewWindow>
          </>
        ) : (
          "complete!!"
        )}
      </>
    );
  }
}
export default Tistory;
