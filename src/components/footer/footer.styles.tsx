import styled from "styled-components"
import { Container } from "react-bootstrap"

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1.2em 2em;
  background: rgb(173, 172, 187);
  background: radial-gradient(
    circle,
    rgba(173, 172, 187, 1) 0%,
    rgba(77, 77, 226, 1) 70%,
    rgba(53, 177, 203, 1) 100%
  );
  color: whitesmoke;
  margin-top: 50px;
  font-weight: 600;
`
