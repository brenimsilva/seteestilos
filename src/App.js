import logo from "./logo.svg";
import "./App.css";
import QuestionContainer from "./components/QuestionContainer";
import QuestionsProvider from "./components/store/QuestionsProvider";
import Question from "./components/Question";
import { useState } from "react";
import Choice from "./components/Choice";
function App() {
  const [windowVisible, setWindowVisible] = useState([
    <Question key={1} index={1} text="pergunta" />,
    <Choice text="ola" />,
  ]);
  return (
    <div className="App">
      {windowVisible}
      <button onClick={() => setWindowVisible(<Question />)}>Confirmar</button>
      <button onClick={() => setWindowVisible(<QuestionContainer />)}>
        Confirma 2
      </button>
    </div>
  );
}

export default App;
