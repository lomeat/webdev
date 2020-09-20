import React from "react";
import styled from "styled-components";

import { UI_Button } from "./UI_Button";
import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Instagram } from "./img/insta.svg";
import { ReactComponent as Email } from "./img/mail.svg";
import { ReactComponent as Telegram } from "./img/telegram.svg";
import backImg from "./img/first-back.png";

export const FirstSection = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Link active>About</Link>
          <Link>Syllabus</Link>
          <Logo></Logo>
          <Link>Projects</Link>
          <Link>FAQ</Link>
        </Header>
        <WelcomeWrapper>
          <Title>your life is WebDev</Title>
          <Subtitle>
            Whatever the approach to development may be, the final program must
            satisfy some fundamental properties
          </Subtitle>
          <UI_Button>shuffle</UI_Button>
        </WelcomeWrapper>
        <Social>
          <Icon>
            <Email />
          </Icon>
          <Icon>
            <Facebook />
          </Icon>
          <Icon>
            <Instagram />
          </Icon>
          <Icon>
            <Telegram />
          </Icon>
        </Social>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  height: 744px;
`;

const Container = styled.div`
  background-image: url(${backImg});
  background-color: transparent;
  background-position: center;
  width: 1062px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 90px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 96px;
`;

const Link = styled.a`
  line-height: 140%;
  color: #fff;
  opacity: ${(props) => (props.active ? "1" : "0.8")};
  border-bottom: ${(props) => (props.active ? "1px solid #fff" : "0")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  transition: 0.1s ease;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 64px;
  color: #fff;
  letter-spacing: 4.5px;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  line-height: 140%;
  width: 500px;
  padding: 20px 0 30px 0;
`;

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

const Icon = styled.div`
  transition: 0.1s ease;
  :hover {
    filter: opacity(75%);
    cursor: pointer;
  }
`;
