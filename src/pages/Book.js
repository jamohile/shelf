import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";
import { getColorHex } from "../colors";

import * as firebase from "firebase/app";
import BookModel from "../models/Book";

const S = {};

export default ({ bookId }) => {
  const [book, setBook] = useState(undefined);
  const bookRef = getBookRef(bookId);

  useEffect(() => {
    return loadBookEffect(bookRef, setBook);
  }, []);

  return (
    <>
      <BookHeader book={book} />
      {book && <BookColorLine book={book} />}
      {book && (
        <BookText book={book} onChange={(text) => bookRef.update({ text })} />
      )}
    </>
  );
};

function getBookRef(bookId) {
  const uid = firebase.auth().currentUser.uid;
  return firebase
    .firestore()
    .collection("user")
    .doc(uid)
    .collection("books")
    .doc(bookId);
}
function loadBookEffect(bookRef, setBook) {
  const cancelEffect = bookRef.onSnapshot((snapshot) => {
    setBook(BookModel.fromSnapshot(snapshot));
  });
  return cancelEffect;
}

S.BookHeader = styled(Header)`
  margin-bottom: 48px;
`;

S.Spacer = styled.span`
  width: 24px;
`;
S.BackButton = styled.span`
  transition: all 0.2s;
  color: black !important;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const BookHeader = ({ book }) => {
  return (
    <S.BookHeader>
      <Link to="/home">
        <S.BackButton className="material-icons">arrow_back</S.BackButton>
      </Link>
      <Title text={book ? book.name : "Loading"} />
      <S.Spacer />
    </S.BookHeader>
  );
};

S.BookText = styled.textarea`
  width: 100%;
  font-family: Bitter;
  font-size: 20px;
  background: none;
  border: none;
  margin-top: 48px;

  :focus {
    outline: none;
  }
`;

S.BookColorLine = styled.div`
  height: 6px;
  width: 48px;
  margin: auto;
  border-radius: 3px;
  background: ${(props) => getColorHex(props.color)};
`;

const BookColorLine = ({ book }) => {
  return <S.BookColorLine color={book.color} />;
};

const BookText = ({ book, onChange }) => {
  return (
    <S.BookText onChange={(e) => onChange(e.target.value)} value={book.text} />
  );
};
