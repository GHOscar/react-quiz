import React, {useRef, useState} from "react";

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
            setDisabled(true);
          }}
          disabled={disabled}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;