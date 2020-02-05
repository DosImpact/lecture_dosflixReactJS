import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const ProfileContainer = styled.div`
  & .profile {
    width: 200px;
    height: 200px;
    background-image: url(${props => props.picture});
    background-position: center center;
    background-size: cover;
    border-radius: 20px;
  }
  & .profile__name {
    text-align: center;
    font-size: 21px;
    margin-top: 5px;
    opacity: 0.5;
  }
`;

const Grid = styled.div`
  background: ${props => props.theme.bgColor};
  .grid__container {
    width: 100%;
    max-width: 1100px;
    height: 50vh;
    margin: 20px auto;
    padding: 20px;
  }
  & .grid__title {
    font-size: 32px;
    margin-bottom: 20px;
  }
  & .grid__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: row;
    gap: 20px;
    justify-items: center;
  }
  & .grid__content:hover .profile {
    opacity: 0.5;
  }
  & .grid__content .profile:hover {
    opacity: 1;
  }
`;

const Section = ({ title, children }) => (
  <Grid>
    <div className="grid__container">
      <h2 className="grid__title">{title}</h2>
      <div className="grid__content">{children}</div>
    </div>
  </Grid>
);
const Profile = ({ name, picture }) => (
  <ProfileContainer picture={picture}>
    <div className="profile"></div>
    <div className="profile__name">{name}</div>
  </ProfileContainer>
);
export default ({ Users }) => {
  return (
    <ThemeProvider theme={theme}>
      <Section title="Celeb User">
        {Users &&
          Users.map(e => (
            <Profile key={e.id} name={e.name} picture={e.picture} />
          ))}
      </Section>
    </ThemeProvider>
  );
};
