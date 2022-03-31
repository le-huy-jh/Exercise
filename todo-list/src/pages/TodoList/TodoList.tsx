import React, { useReducer, useState } from "react";
import Header from "../../components/Header/Header";
import InputContainer from "../../components/InputContainer/InputContainer";
import "./TodoList.css";
import todoReducer from "../../utils/todoReducer";
import { ADD_TODO, CHANGE_STATUS } from "../../utils/todoActions";

const TodoList = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const [inputTodo, setInputTodo] = useState<string>("");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(event.target.value);
  };

  const handleAddTodoItem = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: new Date().getTime(),
        text: inputTodo,
        done: false,
      },
    });
    setInputTodo("");
  };

  return (
    <div className="todo-list">
      <Header title="Todo list" backButton />
      <InputContainer>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChangeText}
          value={inputTodo}
        />
        <button onClick={handleAddTodoItem}>Add</button>
      </InputContainer>
      {todoList.length !== 0 && (
        <div className="status">
          There are{" "}
          <span>
            {todoList.filter((todoItem) => todoItem.done === false).length}
          </span>{" "}
          tasks left out of {todoList.length} tasks
        </div>
      )}
      <ul>
        {todoList.length !== 0 &&
          todoList.map((todoItem) => (
            <li
              key={todoItem.id}
              onClick={() => {
                dispatch({
                  type: CHANGE_STATUS,
                  payload: todoItem.id,
                });
              }}
            >
              &bull;{" "}
              <span
                style={{
                  textDecorationLine: todoItem.done ? "line-through" : "none",
                }}
              >
                {todoItem.text}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
