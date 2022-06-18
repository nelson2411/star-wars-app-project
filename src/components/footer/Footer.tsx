import React from "react";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <p>
        Created by <a href="https://github.com/nelson2411">Nelson Rosales</a>
      </p>
      <p>
        <span>Star Wars API</span>. Built with{" "}
        <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
