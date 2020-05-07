import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const S = {};

S.BookText = styled.textarea`
  width: 100%;
  font-family: Bitter;
  font-size: ${isMobile ? 40 : 20}px;
  background: none;
  border: none;
  margin-top: ${isMobile ? 96 : 48}px;

  :focus {
    outline: none;
  }
`;

export default ({ book, onChange }) => {
  return (
    <S.BookText
      onChange={(e) => onChange(e.target.value)}
      value={book.text}
      placeholder="Type away..."
    />
  );
};
