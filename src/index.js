import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Hellow extends React.Component {
  render() {
    return <h1>Hello my friends</h1>;
  }
}

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  render() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
    return <h2 className="timer">it is {this.state.time} </h2>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hellow />
        <Timer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
