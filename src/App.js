import React, { useState } from "react";
import "./App.css";
import ActiveQuestion from "./components/ActiveQuestion";
import SelectedAnswer from "./components/SelectedAnswer";
import AnswerResult from "./components/AnswerResult";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [correctAns, setCorrectAns] = useState("");

  const nextQuestionHandler = () => {
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === 4) {
      setCurrentQuestion(0);
      console.log("Hello");
    }
  };

  const selectedAnswerHandler = (data) => {
    setSelectedAns(data);
  };

  const correctAnswerHandler = (correctAnswerData) => {
    setCorrectAns(correctAnswerData);
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === 4) {
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="App">
      <h1>Quizzes</h1>

      <ActiveQuestion
        selectedAnswer={selectedAnswerHandler}
        questionNumber={currentQuestion}
        correctAnswer={correctAnswerHandler}
      />
      <SelectedAnswer selected={selectedAns} />
      <AnswerResult rightAns={correctAns} />
      <button type="button" onClick={nextQuestionHandler}>
        Next Question
      </button>
    </div>
  );
}

export default App;
