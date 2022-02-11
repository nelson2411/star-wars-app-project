import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavigationContainer = styled(Navbar)`
  background-color: transparent;
  height: 110px;
  a {
    color: #000 !important;
    margin: 0 12px;
    &:hover {
      color: green !important;
    }
  }
`;
