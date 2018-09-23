import React from "react";
import { hot } from "react-hot-loader";
import style from "./Todo.css";

const Todo = props => (
  <div className={style.TodoItem} key={props.tab.id}>
    {props.tab.text}
    <button
      className={style.TodoDeleteButton}
      key={props.tab.id}
      onClick={() => props.removeTodo(props.tab.id)}
    >
      x
    </button>
  </div>
);

export default hot(module)(Todo);
