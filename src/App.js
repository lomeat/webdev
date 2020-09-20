import React from "react";
import styled from "styled-components";

export const App = () => {
  return (
    <S_Wrapper>
      <S_Container></S_Container>
    </S_Wrapper>
  );
};

const S_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const S_Container = styled.div``;
