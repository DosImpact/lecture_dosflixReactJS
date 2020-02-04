import styled, { css } from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

const Colors = {
  redColor: "#D30913",
  whiteColor: "#FFFFFF",
  grayColor: "#40414A",
  blackColor: "#000000",
  successColor: "#55efc4",
  warningColor: "#fdcb6e",
  dangerColor: "#e84393"
};
const wrapper = css`
  ${customMedia.greaterThan("lgDesktop")`
      border: 1px solid ${Colors.successColor};
      margin: 1rem 20% ;
  `}
  ${customMedia.between("mdDesktop", "lgDesktop")`
       border: 1px solid ${Colors.warningColor};
      margin: 1rem 17% ;
  `}
  ${customMedia.between("tablet", "mdDesktop")`
       border: 1px solid  ${Colors.dangerColor};
      margin: 1rem 14% ;
  `}
    ${customMedia.between("smTablet", "tablet")`
       border: 1px solid  ${Colors.successColor};
      margin: 1rem 11% ;
  `}
  ${customMedia.lessThan("smTablet")`
       border: 1px solid ${Colors.warningColor};
      margin: 1rem 18% ;
  `}
`;

const BoxColor = css`
  background-color: ${Colors.blackColor};
  color: ${Colors.whiteColor};
`;

const theme = {
  ...Colors,
  BoxColor,
  wrapper
};
export default theme;
