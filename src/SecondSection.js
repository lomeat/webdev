import React from "react";
import styled from "styled-components";

import { UI_Button } from "./UI_Button";
import pic from "./img/second-pic.png";

export const SecondSection = () => {
  return (
    <Wrapper>
      <Container>
        <DescriptionWrapper>
          <Title>Rappresent your idea with a smart Design</Title>
          <Subtitle>
            Tasks accompanying and related to programming include: testing,
            debugging, source code maintenance,{" "}
            <Strong>implementation of build systems</Strong>, and management of
            derived artifacts, such as the machine code of computer programs.
          </Subtitle>
          <UI_Button>get started</UI_Button>
        </DescriptionWrapper>
        <Picture src={pic}></Picture>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 120px 0 140px 0;
`;

const Container = styled.div`
  width: 1062px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  width: 408px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #373737;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 140%;
  color: #4e4e4e;
  padding: 20px 0 30px 0;
`;

const Strong = styled.strong`
  font-weight: bold;
  color: #373737;
`;

const Picture = styled.img``;
