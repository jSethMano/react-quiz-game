import React, { useState } from "react";
import QuestionsList from "./QuestionsList";
import Score from "./Score";

const QUESTIONS = [
  {
    id: 1,
    question: "What Animal is on Mozilla Firefox browser?",
    ans: "Red Panda",
    ansSelection: ["Red Panda", "Gray Fox", "Darwins Fox"],
  },
  {
    id: 2,
    question: "Can you guess NASA's internet speed?",
    ans: "91 Gbps",
    ansSelection: ["91 Gbps", "200 Terabits", "5 Gbps"],
  },
  {
    id: 3,
    question: "What is 'Yahoo's' original name ?",
    ans: "akebono.standford.edu",
    ansSelection: ["akebono.standford.edu", "ake.standford.edu", "yahoo.edu"],
  },
  {
    id: 4,
    question: "What's the first word to be auto-corrected?",
    ans: "The",
    ansSelection: ["Where", "The", "This"],
  },
  {
    id: 5,
    question: "Did you know what Jack Dorsey's first ever tweet?",
    ans: "Just setting up my twitter",
    ansSelection: ["Just setting up my twitter", "I'm Lucky", "Tweet?"],
  },
];

const ActiveQuestion = (props) => {
  const [currentScore, setCurrentScore] = useState(0);

  let activeQuestion = props.questionNumber;
  // console.log(QUESTIONS[activeQuestion].question);

  const answerHandlers = (event) => {
    let selectedAns = event.target.value;
    let correctAns = QUESTIONS[activeQuestion].ans;

    props.selectedAnswer(selectedAns);
    props.correctAnswer(correctAns);

    if (selectedAns === correctAns) {
      setCurrentScore(currentScore + 1);
    }
  };

  const populateAnswers = QUESTIONS[activeQuestion].ansSelection.map(
    (choices) => (
      <button value={choices} onClick={answerHandlers}>
        {choices}
      </button>
    )
  );

  return (
    <div>
      <Score score={currentScore} />
      <QuestionsList
        question={QUESTIONS[activeQuestion].question}
        answer={populateAnswers}
      />
    </div>
  );
};

export default ActiveQuestion;
