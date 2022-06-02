import React from "react";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from "../../constants/index";
import { LoginContainer, LoginTitle, TextSecondary } from "./Login.styled";
import { LoginButton } from "../Button/Button.styled";

function LoginPage() {
  return (
    <LoginContainer>
      <LoginTitle>Welcome</LoginTitle>
      <TextSecondary>Login with spotify</TextSecondary>
      <LoginButton
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join(
          "%20"
        )}`}
      >
        Login
      </LoginButton>
    </LoginContainer>
  );
}

export default LoginPage;
