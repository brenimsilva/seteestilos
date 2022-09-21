import logo from "./logo.svg";
import "./App.css";
import QuestionContainer from "./components/QuestionContainer";
import QuestionsProvider from "./components/store/QuestionsProvider";
import Question from "./components/Question";
import { useState } from "react";
import Choice from "./components/Choice";
import LandingPage from "./components/landing/LandingPage";
function App() {
  const [windowVisible, setWindowVisible] = useState(
    <LandingPage onStartTest={() => setWindowVisible(<QuestionContainer />)} />
  );
  return <div className="App">{windowVisible}</div>;
}

export default App;
