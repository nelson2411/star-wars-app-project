import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ImageContainer = styled(Container)`
  height: 70vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 45vh;
    position: relative;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 38%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
