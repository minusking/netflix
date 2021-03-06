import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Đăng nhập</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
