import React, { useState } from 'react';
import "./Question.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


function Question({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-container">
      <h2 className="question-title" onClick={toggleAnswer}>
        {question}
        <span className="accordion-icon">{isOpen ? <MdOutlineKeyboardArrowDown />
          : <MdKeyboardArrowLeft />
        }</span>
      </h2>
      {isOpen && <p className="question-answer">{answer}</p>}
      {!isLast && <div className="question-divider"></div>}
    </div>
  );
}

export default Question;
