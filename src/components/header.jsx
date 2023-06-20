import React from "react";
import styled from "styled-components";
import "../../src/fonts/font.css";

export default function Header() {
  const day = new Date();
  const date = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  return (
    <Wrapper>
      <Logo src="/imgs/logo.png"></Logo>
      <Text>
        오늘은 : {day.getFullYear()}년 {day.getMonth() + 1}월 {day.getDate()}일{" "}
        {date[day.getDay()]}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background-color: #f6cc2a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Logo = styled.img`
  position: absolute;
  width: 210px;
  left: 30px;
`;
const Text = styled.p`
  font-family: "Nanum Pen";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 88px;
`;
