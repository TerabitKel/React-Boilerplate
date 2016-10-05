import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.name}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld name="Batman"/>
  </div>,
  document.querySelector("#container")
);