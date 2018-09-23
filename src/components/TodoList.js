import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Todo from "../components/Todo";

const TodoList = props =>
  props.todoItems.filter(tab => tab.idCard == props.idCard).map(tab => (
    <Todo tab={tab} removeTodo={props.removeTodo.bind(this)} />
    // <div className={style.TodoItem} key={tab.id}>
    //   {tab.text}
    //   <button
    //     className={style.TodoDeleteButton}
    //     key={tab.id}
    //     onClick={() => props.removeTodo(tab.id)}
    //   >
    //     x
    //   </button>
    // </div>
  ));

export default hot(module)(TodoList);
