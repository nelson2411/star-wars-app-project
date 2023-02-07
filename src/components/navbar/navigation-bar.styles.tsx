import styled from "styled-components"
import { Navbar } from "react-bootstrap"

export const NavigationContainer = styled(Navbar)`
  background: rgb(173, 172, 187);
  background: radial-gradient(
    circle,
    rgba(173, 172, 187, 1) 0%,
    rgba(77, 77, 226, 1) 70%,
    rgba(53, 177, 203, 1) 100%
  );
  height: 110px;
  position: fixed;
  width: 100%;
  z-index: 2;
  /* apply bbox shadow only on the bottom */
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
  a {
    color: #000 !important;
    margin: 0 12px;
    &:hover {
      color: whitesmoke !important;
    }
  }

  @media screen and (max-width: 800px) {
    position: relative;
  }
`
