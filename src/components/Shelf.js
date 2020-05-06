import React from "react";
import styled from "styled-components";
import Book from "./Book";
import { withRouter } from "react-router-dom";

const S = {};

S.Shelf = styled.div`
  margin-top: 16px;
`;

S.Books = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
`;

S.ShelfBase = styled.div`
  height: 12px;
  width: 100%;
  background: #cdab92;
  border-radius: 6px;
`;

export default ({ books }) => {
  return (
    <S.Shelf>
      <Books books={books} />
      <S.ShelfBase />
    </S.Shelf>
  );
};

S.BookContainer = styled.div`
  margin-right: 24px;
  :last-child {
    margin-right: 0;
  }
`;

S.BookTitle = styled.div`
  margin-top: 12px;
  font-size: 12px;
  text-align: center;
  font-family: bitter;
`;

const Books = withRouter(({ books, history }) => {
  return (
    <S.Books>
      {books.map((book) => (
        <S.BookContainer onClick={() => history.push(`/books/${book.id}`)}>
          <Book book={book} key={book.id} />
          <S.BookTitle>{book.name}</S.BookTitle>
        </S.BookContainer>
      ))}
    </S.Books>
  );
});
