import React, { Component } from "react";
import style from "./TodoList.css";

const TodoList = props =>
  props.lista.map(tab => (
    <div className={style.TodoItem} key={tab.id}>
      {tab.text}
      <button
        className={style.TodoDeleteButton}
        key={tab.id}
        onClick={() => props.removeTodo(tab.id)}
      >
        x
      </button>
    </div>
  ));

// <h1>{props.lista[0].id.toString()}</h1>;

export default TodoList;
