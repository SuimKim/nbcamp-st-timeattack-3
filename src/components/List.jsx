import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TodoContext } from "../contexts/TodoContext";

const List = () => {
  const { todo, setTodo } = useContext(TodoContext);

  const handleDone = (id) => {
    // TODO: 완료 처리, 토글링
    const selectedTodo = todo.find((item) => item.id === id);

    selectedTodo.isDone === true
      ? (selectedTodo.isDone = false)
      : (selectedTodo.isDone = true);

    const updatedList = todo.map((item) => {
      return item.id === id ? selectedTodo : item;
    });

    setTodo(updatedList);
  };

  const handleDelete = (id) => {
    // TODO: 삭제 처리
    const deletedList = todo.filter((item) => item.id !== id);

    setTodo(deletedList);
  };

  return (
    <StyledList>
      {todo?.map((item) => (
        <StyledListItem key={item.id}>
          <Link to={`/detail/${item.id}`} state={item}>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledContent>{item.content}</StyledContent>
            <StyledStatus>{item.isDone ? "완료" : "미완료"}</StyledStatus>
          </Link>
          <StyledButton onClick={() => handleDone(item.id)}>
            {item.isDone ? "취소" : "완료"}
          </StyledButton>
          <StyledButton onClick={() => handleDelete(item.id)}>
            삭제
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledListItem = styled.li`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`;

const StyledTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const StyledContent = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #666;
`;

const StyledStatus = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${(props) => (props.children === "완료" ? "green" : "red")};
`;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
