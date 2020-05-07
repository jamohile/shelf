import React from "react";
import styled from "styled-components";
import Book from "./Book";
import { withRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";

const S = {};

S.Shelfs = styled.div`
  margin-top: ${isMobile ? 96 : 48}px;
`;

S.Shelf = styled.div`
  margin-bottom: ${isMobile ? 96 : 48}px;
`;

S.Books = styled.div`
  margin-bottom: ${isMobile ? 16 : 8}px;
  display: flex;
  flex-direction: row;
  justify-content: ${isMobile ? "center" : "flex-start"};
`;

S.ShelfBase = styled.div`
  height: ${isMobile ? 23 : 12}px;
  width: 100%;
  background: #cdab92;
  border-radius: ${isMobile ? 12 : 6}px;
`;

export default ({ books }) => {
  const shelfs = [];
  for (let i = 0; i < books.length; i += 6) {
    shelfs.push(books.slice(i, i + 6));
  }
  return (
    <S.Shelfs>
      {shelfs.map((shelf) => (
        <S.Shelf>
          <Books books={shelf} />
          <S.ShelfBase />
        </S.Shelf>
      ))}
    </S.Shelfs>
  );
};

S.BookContainer = styled.div`
  margin-right: ${isMobile ? 48 : 24}px;
  width: ${isMobile ? 140 : 70}px;

  transition: all 0.2s;

  :last-child {
    margin-right: 0;
  }
  :hover {
    transform: translateY(-${isMobile ? 16 : 8}px);
  }
`;

S.BookTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: ${isMobile ? 24 : 12}px;
  font-size: ${isMobile ? 24 : 12}px;
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
