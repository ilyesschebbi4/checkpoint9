import React from "react";
export default class TextField extends React.Component {
  render() {
    return <input value={this.props.toDo} onChange={this.props.change} />;
  }
}
