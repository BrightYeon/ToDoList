import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Main() {
  const day = new Date();
  const [setValue, onChange] = useState(new Date());
  const ToDos = [];

  let text = "";

  const onChangeInput = (event) => {
    text = event.target.value;
  };

  const onClick = () => {
    a(text);
    console.log(text);
  };

  const a = (text) => {
    const dateID = {
      year: setValue.getFullYear(),
      month: setValue.getMonth() + 1,
      date: setValue.getDate(),
      diff: localStorage.length,
    };
    localStorage.setItem(JSON.stringify(dateID), text);
    dateID.text = text;
    ToDos.push(dateID);
    console.log(ToDos);
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
      <Frame>
        <SelectDay>
          {setValue.getFullYear()}년 {setValue.getMonth() + 1}월{" "}
          {setValue.getDate()}일의 할 일 목록
        </SelectDay>
        <ToDo>
          <WriteToDo
            onChange={onChangeInput}
            placeholder="할 일을 입력하세요"
          ></WriteToDo>
          <ToDoBtn onClick={onClick}>등록</ToDoBtn>
        </ToDo>
        <List></List>
      </Frame>
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
  gap: 50px;
`;
const Wrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
const Header = styled.div`
  width: 350px;
`;
const Today = styled.h4`
  text-align: center;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const SelectDay = styled.h1`
  font-size: 25px;
  width: fit-content;
`;
const ToDo = styled.div`
  width: 335px;
  padding: 21.28px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WriteToDo = styled.input`
  width: 250px;
  height: 40px;
  border: 1px solid #666;
  border-radius: 10px;
`;
const ToDoBtn = styled.button`
  width: 60px;
  height: 40px;
  background-color: white;
  border: 1px solid #666;
  border-radius: 10px;
`;
const List = styled.ul``;
const ToDoList = styled.li``;
