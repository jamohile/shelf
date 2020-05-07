import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

export default styled.span`
  width: ${isMobile ? 48 : 24}px;
`;
