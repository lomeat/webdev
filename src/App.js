import React from "react";
import styled from "styled-components";

import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

export const App = () => {
  return (
    <Wrapper>
      <FirstSection />
      <SecondSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
