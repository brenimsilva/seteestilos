import "./App.css";
import QuestionContainer from "./components/QuestionContainer";
import { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
function App() {
  const [windowVisible, setWindowVisible] = useState(
    <LandingPage onStartTest={() => setWindowVisible(<QuestionContainer />)} />
  );
  return <div className="App">{windowVisible}</div>;
}

export default App;
