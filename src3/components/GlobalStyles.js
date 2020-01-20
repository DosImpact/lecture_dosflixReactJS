import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bangers|Montserrat&display=swap');
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;

    }
    body{
        font-family: 'Montserrat',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:black;
        color:#FFFFFF;
        padding-top:100px;
    }
    button{
        background-color:black;
        color:#FFFFFF;
    }
    strong{
     color: red;
    }
`;
export default GlobalStyles;
