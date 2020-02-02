import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  pupleColor: "#2f2051",
  darkColor: "#000000",
  grayColor: "#e2e2e2",
  logoImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyh9TdQEqj0yVLlMJ4RY_2oKI6etWTg23olNPMItjoMQEBEpJD",
  tmpImage: "https://icon.foundation/resources/image/og-img.png"
};

const puplebox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pupleColor};
  color: ${colors.whiteColor};
`;

const theme = {
  ...colors,
  puplebox
};

export default theme;
