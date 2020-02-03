import react from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/pricing">pricing</Link>
  </header>
);
