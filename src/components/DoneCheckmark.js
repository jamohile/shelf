import React from "react";
import styled, { keyframes } from "styled-components";
import HeaderButton from "./HeaderButton";

const S = {};

const EntryAnimation = keyframes`
    from{
       transform: translateY(12px);
    }

    to{
        transform: translateY(0px);
    }
`;

S.Button = styled(HeaderButton)`
  animation: ${EntryAnimation} once forwards ease-out 0.4s;
`;

export default ({ onClick }) => {
  return (
    <S.Button className="material-icons" onClick={onClick}>
      done
    </S.Button>
  );
};
