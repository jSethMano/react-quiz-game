import React from "react";

const QuestionsList = (props) => {
  const answerHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Question is</h2>
      <p>{props.question}</p>
      <div>
        <form onSubmit={answerHandler}>{props.answer}</form>
      </div>
    </div>
  );
};

export default QuestionsList;
