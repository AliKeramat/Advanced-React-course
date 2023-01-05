import React from "react";
import ReactDOM from "react-dom";

class Hellow extends React.Component {
  render() {
    return (
      <h1>Hello my friends</h1>
    )
  }
}

class Timer extends React.Component {
  render(){
    return(
      <h2>it is {new Date().toLocaleTimeString()}</h2>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <Hellow/>
      <Timer/>
      </div>
    );
  }
}

const tick = () => {
  ReactDOM.render(<App/>, document.getElementById("root"));
};

setInterval(() => {
  tick();
}, 1000);
