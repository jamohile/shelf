import React from "react";
import styled from "styled-components";

import { isMobile } from "react-device-detect";

export default styled.span`
  transition: all 0.2s;
  color: black !important;
  font-size: ${isMobile ? 48 : 24}px;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
