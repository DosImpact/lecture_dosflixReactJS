import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 400px;
  height: 700px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  display: flex;
`;

const Title = styled.div`
  font-size: 54px;
`;

function Movie({ name, img }) {
  return (
    <>
      <Container img={img}>
        <Helmet>
          <title> Movie! </title>
        </Helmet>
        <Title>{name}</Title>
      </Container>
    </>
  );
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Movie;
