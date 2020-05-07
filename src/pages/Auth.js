import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";

import * as firebase from "firebase/app";
import "firebase/auth"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
const authConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/home",
};

export default ({}) => {
  return (
    <>
      <AuthHeader />
      <AuthContainer>
        <StyledFirebaseAuth
          uiConfig={authConfig}
          firebaseAuth={firebase.auth()}
        />
      </AuthContainer>
    </>
  );
};

const AuthHeader = ({}) => {
  return (
    <Header>
      <Title text="shelf. ridiculously simple notes." />
    </Header>
  );
};

const AuthContainer = styled.div`
  margin-top: 48px;
  zoom: ${isMobile? 2: 1};
`;
