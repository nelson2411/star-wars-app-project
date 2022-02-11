import React from "react";
import { Container } from "react-bootstrap";
import { BackgroundImageContainer, ImageContainer } from "./header.styles";

const Header = () => {
  return (
    <ImageContainer fluid>
      <BackgroundImageContainer
        style={{ backgroundImage: `url('https://i.ibb.co/0rWSjcy/496936.jpg)` }}
      />
    </ImageContainer>
  );
};

export default Header;
