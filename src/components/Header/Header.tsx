import React from "react";
import { Header, HeaderList, NavBar, MainLogo, Link } from "./Style.Header";
import projectLogo from "../../assets/images/projectLogo.svg";
import { GlobalStyle } from "../../pages/Styles/General_CSS";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <Header>
      <GlobalStyle />
      <MainLogo src={projectLogo} />
      <NavBar>
        <HeaderList>
          <li>
            <Link to="/">Home</Links>
          </li>
          <li>
            <Link to="/register">Registre-se</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="#">Sobre</Link>
          </li>
        </HeaderList>
      </NavBar>
    </Header>
  );
}

export default MainHeader;
