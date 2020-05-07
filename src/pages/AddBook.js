import React, { useState, useEffect } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";

import * as firebase from "firebase/app";
import "firebase/firestore";

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

export default withRouter(({ history }) => {
  const [book, setBook] = useState({ color: "red", name: "" });

  return (
    <>
      <AddBookHeader
        book={book}
        onChange={(name) => setBook({ ...book, name })}
        onSubmit={async () => {
          const { id } = await BookModel.getCollectionRef().add({
            ...book,
            name: book.name || "My Book",
          });
          history.push(`/books/${id}`);
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
});

const AddBookHeader = ({ book, onChange, onSubmit }) => {
  return (
    <Header>
      <Link to="/home">
        <HeaderButton className="material-icons">arrow_back</HeaderButton>
      </Link>
      <EditableTitle
        placeholder='"My Book"'
        value={book.name}
        onChange={onChange}
      />
      {book.color ? <DoneCheckmark onClick={onSubmit} /> : <HeaderSpacer />}
    </Header>
  );
};
