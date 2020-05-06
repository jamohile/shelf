import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Title from "../components/Title";

import * as firebase from "firebase/app";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
const authConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/home",
};

export default ({}) => {
  return (
    <>
      <AuthHeader />
      <StyledFirebaseAuth
        uiConfig={authConfig}
        firebaseAuth={firebase.auth()}
      />
    </>
  );
};

const AuthHeader = ({}) => {
  return (
    <Header>
      <Title text="shelf." />
    </Header>
  );
};
