import React, { Component } from "react";
import uuid from "uuid";
import style from "./App.css";
import { hot } from "react-hot-loader";
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          idCard: 1,
          text: "clean room"
        },
        {
          id: 2,
          idCard: 1,
          text: "wash the dishes"
        },
        {
          id: 3,
          idCard: 1,
          text: "feed my cat"
        },
        {
          id: 4,
          idCard: 2,
          text: "go to sleep"
        }
      ],
      data2: [
        {
          id: 1,
          title: "To Do"
        },
        {
          id: 2,
          title: "Doing"
        }
      ]
    };
  }
  addTodo(idCard) {
    const todo = {
      text: prompt("Enter the name of the card"),
      idCard,
      id: uuid.v4()
    };
    if (todo.text.length > 0) {
      const data = [...this.state.data, todo];
      this.setState({ data });
    }
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title={this.state.data.filter(tab => tab.idCard == 1).length} />
        <div className={style.columnContainer}>
          <TodoForm
            todoItems={this.state.data}
            todoColumns={this.state.data2}
            removeTodo={this.removeTodo.bind(this)}
            addTodo={this.addTodo.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
