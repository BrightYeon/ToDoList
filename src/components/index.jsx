import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "./header";

export default function Main() {
  const [value, setValue] = useState(new Date());
  const [ToDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState();

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  function onClick() {
    setLocalStorage(text);
  }

  function onKeyDownEnter() {
    if (window.event.keyCode === 13) {
      setLocalStorage(text);
    }
  }

  function setLocalStorage(text) {
    const temp = JSON.parse(localStorage.getItem("key")) || [];
    const dateID = {
      createdYear: value.getFullYear(),
      createdMonth: value.getMonth() + 1,
      createdDate: value.getDate(),
      text: text,
    };

    temp.push(dateID);
    setToDos(temp);
    setText("");
  }

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(ToDos));
  }, [ToDos]);

  useEffect(() => {
    setCount(
      ToDos.filter(
        (todo) =>
          value.getFullYear() === todo.createdYear &&
          value.getMonth() + 1 === todo.createdMonth &&
          value.getDate() === todo.createdDate
      ).length
    );
  }, [ToDos, value]);

  return (
    <Container>
      <Header></Header>
      <Wrapper>
        <Left>
          <Calendar onChange={setValue} value={value} />
          <Counter>
            {count > 0 ? (
              <Count>
                {value.getFullYear()}년 {value.getMonth() + 1}월{" "}
                {value.getDate()}일에는
                <br />할 일이 {count}개 있어요!
              </Count>
            ) : (
              <Count>
                {value.getFullYear()}년 {value.getMonth() + 1}월{" "}
                {value.getDate()}일에는
                <br />할 일이 없어요!
              </Count>
            )}
          </Counter>
        </Left>
        <Right>
          <ToDo>
            <WriteToDo
              onChange={onChangeInput}
              placeholder="할 일을 입력하세요"
              value={text}
              onKeyDown={onKeyDownEnter}
            ></WriteToDo>
            <ToDoBtn onClick={onClick}>등록</ToDoBtn>
          </ToDo>
          <List>
            {ToDos.length > 0 ? (
              ToDos.filter(
                (todo) =>
                  value.getFullYear() === todo.createdYear &&
                  value.getMonth() + 1 === todo.createdMonth &&
                  value.getDate() === todo.createdDate
              ).map((todo, i) => <DailyToDo id={i}>{todo.text}</DailyToDo>)
            ) : (
              <></>
            )}
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b8fcbf;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const Wrapper = styled.div`
  width: 1400px;
  height: 563px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 50px;
`;
const Left = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Counter = styled.div`
  width: 100%;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Count = styled.p`
  font-family: "Nanum Pen";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 62px;
`;
const Right = styled.div`
  width: 1050px;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
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
const DailyToDo = styled.li``;
