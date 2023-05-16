import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

export default function Main() {
  const day = new Date();
  const [setValue, onChange] = useState(new Date());
  let i = 0;

  const onClick = () => {};

  const a = (text) => {
    const dateID = setValue.getDate();
    localStorage.setItem(dateID + "-" + i, text);
  };

  const input = (event) => {
    a(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Today>
            오늘은
            <br />
            {day.getFullYear()}년 {day.getMonth() + 1}월 {day.getDate()}일
          </Today>
        </Header>
        <Calendar onChange={onChange} value={setValue} />
      </Wrapper>
      <ToDo>
        <WriteToDo
          placeholder="할 일을 입력하세요"
          onChange={input}
        ></WriteToDo>
        <ToDoBtn onClick={onClick}></ToDoBtn>
      </ToDo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 800px;
  background-color: #b8fcbf;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  width: fit-content;
`;
const Today = styled.h4`
  text-align: center;
`;
const ToDo = styled.div`
  width: 50%;
  padding: 21.28px 0px;
`;
const WriteToDo = styled.input`
  width: 250px;
  height: 40px;
  border: 0px;
  border-radius: 10px;
`;
const ToDoBtn = styled.button`
  width: 30px;
  height: 60px;
`;
