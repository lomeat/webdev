import React from "react";
import styled from "styled-components";

export const UI_Button = (props) => <Button>{props.children}</Button>;

const Button = styled.button`
  border: 0;
  background: #00afdb;
  color: #fff;
  padding: 16px 48px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.1s ease;

  :hover {
    cursor: pointer;
    background: #008db0;
  }
  :active {
    background: #007593;
  }
`;
