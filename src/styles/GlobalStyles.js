import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
    }
`;

export default globalStyles;
