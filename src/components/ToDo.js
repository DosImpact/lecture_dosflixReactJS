import React, { Component, useState } from "react";

export default class ToDo extends Component {
  state = {
    value: "",
    toDoList: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: "" });
    const { toDoList, value } = this.state;
    toDoList.push(value);
    this.setState({ toDoList });
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

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
            {toDoList.map(e => (
              <div>{e}</div>
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
