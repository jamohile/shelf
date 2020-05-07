import React from "react";
import styled from "styled-components";
import { getColorHex } from "../colors";
import { isMobile } from "react-device-detect";

const S = {};

S.Book = styled.div`
  width: ${isMobile ? 140 : 70}px;
  height: ${isMobile ? 200 : 100}px;
  border-radius: ${isMobile ? 10 : 5}px;
  overflow: hidden;
  position: relative;

  transition: all 0.2s;
  :hover {
    box-shadow: 0px 8px 32px 0px ${(props) => getColorHex(props.color)}88;
  }
`;

S.Spine = styled.div`
  height: 100%;
  width: 10%;
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
    <S.Book color={color}>
      <S.Cover color={color} />
      <S.Spine />
    </S.Book>
  );
};
