import React from "react";
import styled from "styled-components";

import { FirstSection } from "./FirstSection";

export const App = () => {
  return (
    <Wrapper>
      <FirstSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
