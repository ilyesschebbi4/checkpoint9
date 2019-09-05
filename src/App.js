import React from "react";
import ReactDOM from "react-dom";


import Button from "./Button";
import TextField from "./TextField";
// import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toDoList: [], toDo: "" };
  }

  getToDo = e => {
    this.setState({ ...this.state, toDo: e.target.value });
  };

  addToDo = e => {
    this.setState(state => {
      state.toDoList.push(this.state.toDo);
      return {
        ...this.state,
        toDoList: state.toDoList
      };
    });
    this.setState({ toDo: "" });
  };

  checkToDo = i => {
    document.getElementById(i).style.textDecoration = "line-through";
  };
  render() {
    return (
      <div>
        <TextField toDo={this.state.toDo} change={this.getToDo} />
        <Button click={this.addToDo}>add</Button>

        <ul>
          {this.state.toDoList.map((item, index) => (
            <li id={index} onClick={() => this.checkToDo(index)}>
              {item}
            </li>
          ))}
        </ul>
        {/* <List list={this.state.toDoList} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
