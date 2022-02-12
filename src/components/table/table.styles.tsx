import styled from "styled-components";
import { Button, Table, Container } from "react-bootstrap";

export const TableContainer = styled(Container)`
  @media screen and (max-width: 800px) {
    margin-top: 200px;
  }
`;

export const ButtonLink = styled(Button)`
  text-decoration: none;
  color: #f5f5f5;
`;

export const LoadingContainer = styled.h4`
  color: #000;
  text-align: center;
  margin-top: 25px;
`;
