import React from "react";
import styled from "styled-components";
import {getColorHex} from "../colors";

const S = {};

S.BookColorLine = styled.div`
  height: 6px;
  width: 48px;
  margin: auto;
  margin-top: 24px;
  border-radius: 3px;
  background: ${(props) => getColorHex(props.color)};
`;

export default ({ book }) => {
  return <S.BookColorLine color={book.color} />;
};
