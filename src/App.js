import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const goals = [
  "1. React 개발에 필요한 환경을 구축한다.",
  "2. 새로운 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8",
  "3. 개발 편의를 위한 VSCode IDE를 익힌다.",
  "4. 기본적인 Git 사용법을 익힌다",
  "5. PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.",
  "6. React 로 간단한 노트앱을 만들어본다"
];

const LectureGoalList = props => {
  console.log(props);
  return (
    <div>
      <div>{props.title}</div>
      <ul>{props.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Ha</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={"강의 목표"} />
      </div>
    );
  }
}

export default App;
