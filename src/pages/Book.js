import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";

import BookModel from "../models/Book";
import BookColorLine from "../components/BookColorLine";
import BookText from "../components/BookText";
import LoadingHeader from "../components/LoadingHeader";
import HeaderSpacer from "../components/HeaderSpacer";
import HeaderButton from "../components/HeaderButton";
import EditableTitle from "../components/EditableTitle";

const S = {};

S.Book = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default ({ bookId }) => {
  const [book, setBook] = useState({ instance: new BookModel(bookId) });

  useEffect(() => {
    return book.instance.get(setBook);
  }, []);

  if (book.instance.name === undefined) {
    return <LoadingHeader />;
  }
  return (
    <S.Book>
      <BookHeader
        book={book.instance}
        onNameChange={(name) => book.instance.update({ name })}
      />
      <BookColorLine book={book.instance} />
      <BookText
        book={book.instance}
        onChange={(text) => book.instance.update({ text })}
      />
    </S.Book>
  );
};

const BookHeader = withRouter(({ book, history, onNameChange }) => {
  return (
    <Header>
      <Link to="/home">
        <HeaderButton className="material-icons">arrow_back</HeaderButton>
      </Link>
      <EditableTitle value={book.name} onChange={onNameChange} />
      <HeaderButton
        className="material-icons"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete?")) {
            book.delete();
            history.push("/home");
          }
        }}
      >
        delete_outline
      </HeaderButton>
    </Header>
  );
});
