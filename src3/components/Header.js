import React from "react";
import { Link, withRouter } from "react-router-dom";
import NewWindow from "react-new-window";
import Axios from "axios";

const Demo = props => (
  <NewWindow>
    {console.log(props)}
    <h1>Hi 👋 {props.name}</h1>
  </NewWindow>
);
const Demo2 = props => (
  <NewWindow url="https://www.npmjs.com/package/react-new-window?activeTab=readme">
    {console.log(props)}
    <h1>Hi 👋</h1>
  </NewWindow>
);
class Header extends React.Component {
  state = {
    showNewTab: false
  };
  handleClick = () => {
    console.log("clikc");
    this.setState({ showNewTab: true });
  };
  geturls = async () => {
    Axios.get(
      "https://www.tistory.com/oauth/authorize?client_id=ec5864d80bcf61d0ca7279c89a3affc8&redirect_uri=https://plasmacodeing.tistory.com/&response_type=token"
    )
      .then(response => {
        console.log(response);
        // if (response.status === 200) {
        //     window.location.href = response.request.responseURL;
        // }
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.geturls();
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <button onClick={this.handleClick}>이 버튼을 눌러봐</button>
        {this.state.showNewTab && <Demo name="Doyoung" />}
        <ul>
          <li>
            <Link to="https://rocabilly.tistory.com/84">Movies</Link>
          </li>
          <li>
            <a href="https://rocabilly.tistory.com/84" target="_blank">
              Test
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
