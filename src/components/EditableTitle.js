import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const S = {};

S.EditableTitle = styled.input`
  flex-grow: 1;
  width: 0;
  text-align: center;
  font-family: Bitter;
  font-size: ${isMobile ? 48 : 24}px;
  border: none;
  background: none;
  :focus{
    outline: none;
  }
`;

export default ({ value, placeholder, onChange }) => {
  return (
    <S.EditableTitle
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
