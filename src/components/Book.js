import React from "react";
import styled from "styled-components";
import {getColorHex} from "../colors";

const S = {};

S.Book = styled.div`
  width: 70px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

S.Spine = styled.div`
  height: 100%;
  width: 10px;
  left: 0;
  top: 0;
  background: rgba(20, 20, 20, 0.2);
  position: absolute;
`;

S.Cover = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => getColorHex(props.color)};
  position: absolute;
`;

export default ({ book }) => {
  const { color } = book;
  return (
    <S.Book>
      <S.Cover color={color} />
      <S.Spine />
    </S.Book>
  );
};
