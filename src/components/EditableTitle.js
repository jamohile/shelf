import React from "react";
import styled from "styled-components";

const S = {};

S.EditableTitle = styled.input`
  flex-grow: 1;
  text-align: center;
  font-family: Bitter;
  font-size: 24px;
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
