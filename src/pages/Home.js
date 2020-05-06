import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";
import Shelf from "../components/Shelf";

import * as firebase from "firebase/app";
import BookModel from "../models/Book";
import { Link } from "react-router-dom";

const S = {};

export default ({}) => {
  const [books, setBooks] = useState();
  const booksRef = getBooksRef();

  useEffect(() => {
    return loadBooksEffect(booksRef, setBooks);
  }, []);

  return (
    <>
      <MainHeader onAdd={() => booksRef.add({ color: "red" })} books={books} />
      {books && <Shelf books={books} />}
    </>
  );
};

function getBooksRef() {
  const uid = firebase.auth().currentUser.uid;
  return firebase.firestore().collection("user").doc(uid).collection("books");
}
function loadBooksEffect(booksRef, setBooks) {
  const cancelEffect = booksRef.onSnapshot((snapshot) => {
    const updatedBooks = [];
    snapshot.forEach((book) => updatedBooks.push(BookModel.fromSnapshot(book)));
    setBooks(updatedBooks);
  });
  return cancelEffect;
}

S.MainHeader = styled(Header)`
  margin-bottom: 24px;
`;
S.Spacer = styled.span`
  width: 24px;
`;
S.AddBookButton = styled.span`
  transition: all 0.2s;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const MainHeader = ({ books, onAdd }) => {
  return (
    <S.MainHeader>
      <S.Spacer style={{ width: 24 }} />
      <Title text={books ? "shelf." : "Loading"} />
      <Link to="/add-book">
        <S.AddBookButton className="material-icons">add</S.AddBookButton>
      </Link>
    </S.MainHeader>
  );
};
