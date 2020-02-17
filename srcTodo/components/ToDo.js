import React, { Component, useState } from "react";

const TODO_LS = "ToDoList";

export default class ToDo extends Component {
  state = {
    value: "",
    toDoList: []
  };
  saveTodoList = () => {
    const { toDoList } = this.state;
    localStorage.setItem(TODO_LS, JSON.stringify(toDoList));
  };
  loadTodoList = () => {
    const res = localStorage.getItem(TODO_LS);
    if (res !== null) {
      const localList = JSON.parse(res);
      const { toDoList } = this.state;
      localList.map(e => toDoList.push({ id: e.id, value: e.value }));
      this.setState({ toDoList });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: "" });
    const { toDoList, value } = this.state;

    toDoList.push({ id: toDoList.length, value });
    this.setState({ toDoList });
    this.saveTodoList();
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };
  handleOnClick = id => {
    let { toDoList } = this.state;
    const filtered = toDoList.filter(e => e.id !== parseInt(id));
    this.setState({ toDoList: filtered });
    localStorage.setItem(TODO_LS, JSON.stringify(filtered));
  };
  componentDidMount() {
    this.loadTodoList();
  }

  render() {
    const { value, toDoList } = this.state;
    return (
      <div>
        <div>TodoList:</div>
        <form onSubmit={this.handleSubmit}>
          <input value={value} onChange={this.handleInputChange}></input>
        </form>
        {toDoList.length > 0 ? (
          <div>
            {toDoList.map((e, i) => (
              <div key={i}>
                {e.value}
                <button
                  value={e.id}
                  onClick={e => this.handleOnClick(e.target.value)}
                >
                  delme
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

// 입력창 + 엔터

// 해당 데이터를 저장도 할꺼야

// RAM list

// LocalStorge 기능
