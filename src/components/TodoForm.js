import React from "react";
import style from "./TodoForm.css";
import TodoList from "../components/TodoList";
import { hot } from "react-hot-loader";

const TodoForm = props =>
  props.todoColumns.map(tab => (
    <div className={style.column} key={tab.id}>
      <h2 className={style.columnTitle}>
        {tab.title}
        <span class={style.tooltiptext}> rename Me</span>
      </h2>
      <div className={style.columnButtons}>
        <button
          className={style.columnAddCard}
          onClick={() => props.addTodo(tab.id)}
        >
          + Add a card
        </button>
        <button className={style.columnBtnDelete}>x</button>
      </div>
      <TodoList
        idCard={tab.id}
        todoItems={props.todoItems}
        removeTodo={props.removeTodo.bind(this)}
      />
    </div>
  ));

export default hot(module)(TodoForm);
