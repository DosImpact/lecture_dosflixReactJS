import React from "react";
import styled from "styled-components";

import Container from "../../components/frame/Container";
import { PictureTitle } from "../../components/Elements";
import { getComponent } from "../../Selector/getComponent";
export default ({ Temp_Data }) => {
  return (
    <Container>
      {Temp_Data.map(e => getComponent({ data: e.data, Meta: e.Meta }))}
    </Container>
  );
};
