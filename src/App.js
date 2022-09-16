import logo from "./logo.svg";
import "./App.css";
import QuestionContainer from "./components/QuestionContainer";
import QuestionsProvider from "./components/store/QuestionsProvider";
function App() {
  return (
    <QuestionsProvider>
      <div className="App">
        <QuestionContainer />
      </div>
    </QuestionsProvider>
  );
}

export default App;
