import React from "react";

const AnswerResult = (props) => {
  return (
    <div>
      <p>{props.result}</p>
      <p>The correct answer is: {props.rightAns}</p>
    </div>
  );
};

export default AnswerResult;
