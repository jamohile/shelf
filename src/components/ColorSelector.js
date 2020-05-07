import React from "react";
import styled from "styled-components";
import colors, { getColorName, getColorHex } from "../colors";
import { isMobile } from "react-device-detect";

const S = {};

S.Color = styled.div`
  width: ${isMobile ? 48 : 24}px;
  height: ${isMobile ? 48 : 24}px;
  border-radius: ${isMobile ? 24 : 12}px;
  background: ${(props) => getColorHex(props.color)};
  box-sizing: border-box;
  border: ${(props) => (props.selected ? `${isMobile ? 6 : 3}px solid black` : "none")};
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
export default ({ value, onChange }) => {
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
