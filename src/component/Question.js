import React from 'react';
import "./Question.css"

function Question({ question, answer, isLast }) {
  return (
    <div className="question-container">
      <h2 className="question-title">{question}</h2>
      <p className="question-answer">{answer}</p>
      {!isLast && <div className="question-divider"></div>}
    </div>
  );
}

export default Question;
