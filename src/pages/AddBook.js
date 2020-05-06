import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";
import colors, { getColorName, getColorHex } from "../colors";

import * as firebase from "firebase/app";
import Book from "../components/Book";
import EditableTitle from "../components/EditableTitle";

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

  const booksRef = getBooksRef();

  if (submitted) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <AddBookHeader
        book={book}
        onChange={(name) => setBook({ ...book, name })}
        onSubmit={async () => {
          await booksRef.add(book);
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
        <S.Button className="material-icons">arrow_back</S.Button>
      </Link>
      <EditableTitle
        placeholder={"Title"}
        value={book.name}
        onChange={onChange}
      />
      {book.name && book.color ? (
        <S.Button className="material-icons" onClick={onSubmit}>
          done
        </S.Button>
      ) : (
        <S.Spacer />
      )}
    </S.AddBookHeader>
  );
};

S.Color = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: ${(props) => getColorHex(props.color)};
  box-sizing: border-box;
  border: ${(props) => (props.selected ? "3px solid black" : "none")};
`;
const Color = ({ color, selected, onSelect }) => {
  return <S.Color color={color} selected={selected} onClick={onSelect} />;
};

S.ColorSelector = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 48px;
`;
const ColorSelector = ({ value, onChange }) => {
  const options = Object.keys(colors);
  return (
    <S.ColorSelector>
      {options.map((option) => (
        <Color
          color={option}
          selected={value === option}
          onSelect={() => onChange(option)}
        />
      ))}
    </S.ColorSelector>
  );
};
