import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";

import * as firebase from "firebase/app";
import Book from "../components/Book";
import BookModel from "../models/Book";
import EditableTitle from "../components/EditableTitle";
import DoneCheckmark from "../components/DoneCheckmark";
import ColorSelector from "../components/ColorSelector";
import HeaderButton from "../components/HeaderButton";
import HeaderSpacer from "../components/HeaderSpacer";

const S = {};

S.BookContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 48px;
`;

export default ({ bookId }) => {
  const [book, setBook] = useState({ color: "red", name: "" });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <AddBookHeader
        book={book}
        onChange={(name) => setBook({ ...book, name })}
        onSubmit={async () => {
          await BookModel.getCollectionRef().add(book);
          setSubmitted(true);
        }}
      />
      <S.BookContainer>
        <Book book={book} />
      </S.BookContainer>

      <ColorSelector
        value={book.color}
        onChange={(color) => setBook({ ...book, color })}
      />
    </>
  );
};

function getBooksRef() {
  const uid = firebase.auth().currentUser.uid;
  return firebase.firestore().collection("user").doc(uid).collection("books");
}

S.AddBookHeader = styled(Header)`
  margin-bottom: 48px;
`;

S.Spacer = styled.span`
  width: 24px;
`;
S.Button = styled.span`
  transition: all 0.2s;
  color: black !important;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const AddBookHeader = ({ book, onChange, onSubmit }) => {
  return (
    <S.AddBookHeader>
      <Link to="/home">
        <HeaderButton className="material-icons">arrow_back</HeaderButton>
      </Link>
      <EditableTitle
        placeholder={"Title"}
        value={book.name}
        onChange={onChange}
      />
      {book.name && book.color ? (
        <DoneCheckmark onClick={onSubmit} />
      ) : (
        <HeaderSpacer />
      )}
    </S.AddBookHeader>
  );
};
