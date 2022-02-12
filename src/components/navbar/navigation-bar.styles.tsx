import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavigationContainer = styled(Navbar)`
  background-color: transparent;
  height: 110px;
  position: relative;
  width: 100%;
  z-index: 2;
  a {
    color: #000 !important;
    margin: 0 12px;
    &:hover {
      color: green !important;
    }
  }

  @media screen and (max-width: 800px) {
    position: relative;
  }
`;
