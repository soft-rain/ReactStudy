//함수형
import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
export default App;

//컴포넌트형

// import React from "react";
// import "./App.css";

// class App extends Component{
//   render(){
//     const name='react';
//     return <div className="react">{name}</div>
//   }
// }
// export default App;
