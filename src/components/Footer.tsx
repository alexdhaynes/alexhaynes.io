import React from "react";
import styled from "styled-components";
import { theme } from "../styles/globals.styles"; // Adjust the path if needed

const BasicFooter = styled.footer`
  color: ${theme.colors.text3}; 
  margin-top: 80px;

`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <BasicFooter>
      <p>&copy; {year} Alex Haynes</p>
    </BasicFooter>
  );
};

export default Footer;
