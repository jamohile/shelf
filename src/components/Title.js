import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const S = {};

S.Title = styled.span`
    flex-grow: 1;
    text-align: center;
    font-family: Bitter;
    font-size: ${isMobile? 48: 24}px;
`;

export default ({ text }) => {
  return <S.Title>{text}</S.Title>;
};
