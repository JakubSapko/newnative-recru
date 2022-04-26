import styled from "styled-components";
import { Icon } from "@iconify/react";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1em;
  text-align: right;
  font-size: 0.9em;
  color: #0d3b66;
  z-index: 3;
  p {
    width: auto;
    height: 50px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #0d3b66;
    font-size: 1.4em;
    font-weight: bold;
  }
  @media screen and (max-width: 1100px) {
    text-align: center;
    top: 5em;
    bottom: unset;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>
        {" "}
        Created by: <br />{" "}
        <Icon icon="logos:github-icon" style={{height: "20px", width: "20px"}}/>
        <a href="https://github.com/JakubSapko"> Jakub Sapko </a>{" "}
      </p>
    </FooterWrapper>
  );
};

export default Footer;