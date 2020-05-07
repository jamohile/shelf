import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import * as firebase from "firebase";
import "firebase/auth";

import pages from "./pages";

const Main = styled.div`
  height: 100%;
`;

export default () => {
  const [user, setUser] = useState(firebase.auth().currentUser);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <Main>
      <Router>
        <Route path="/auth" component={pages.Auth} />
        <AuthWall user={user}>
          <Route path="/home" component={pages.Home} />
          <Route
            path="/books/:bookId"
            component={({ match }) => (
              <pages.Book bookId={match.params.bookId} />
            )}
          />
          <Route path="/add-book" component={pages.AddBook} />
        </AuthWall>
      </Router>
    </Main>
  );
};

const AuthWall = ({ user, children }) => {
  if (!user) {
    localStorage.setItem("post-auth-redirect", window.location.pathname);
    return <Redirect to="/auth" />;
  }

  const redirectUrl = localStorage.getItem("post-auth-redirect") || "/home";
  return (
    <>
      <Route path="/auth" component={() => <Redirect to={redirectUrl} />} />
      {children}
    </>
  );
};
