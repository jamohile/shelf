import React from "react";
import styled from "styled-components";

const S = {};

S.Title = styled.span`
    flex-grow: 1;
    text-align: center;
    font-family: Bitter;
    font-size: 24px;
`;

export default ({ text }) => {
  return <S.Title>{text}</S.Title>;
};
