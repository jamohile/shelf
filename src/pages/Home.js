import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";
import Shelf from "../components/Shelf";
import LoadingHeader from "../components/LoadingHeader";

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import BookModel from "../models/Book";
import { Link } from "react-router-dom";
import HeaderButton from "../components/HeaderButton";

const S = {};

export default ({}) => {
  const [books, setBooks] = useState(undefined);

  useEffect(() => {
    return BookModel.getAll(setBooks);
  }, []);

  if (books === undefined) {
    return <LoadingHeader />;
  }

  return (
    <S.Home>
      <MainHeader books={books} />
      <Shelf books={books} />
    </S.Home>
  );
};

S.Home = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainHeader = ({ books, onAdd }) => {
  return (
    <Header>
      <HeaderButton
        className="material-icons"
        onClick={() => firebase.auth().signOut()}
      >
        exit_to_app
      </HeaderButton>
      <Title text="shelf." />
      <Link to="/add-book">
        <HeaderButton className="material-icons">add</HeaderButton>
      </Link>
    </Header>
  );
};
