import React from "react";
import { withRouter, Link } from "react-router-dom";
export default withRouter(({ location: { pathname } }) => (
  <header>
    {console.log(pathname)}
    <Link to="/">Home</Link>
    <Link to="/detail">Detail</Link>
  </header>
));
