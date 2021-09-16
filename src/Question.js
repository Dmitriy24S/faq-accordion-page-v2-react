import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="question" onClick={() => setIsOpen(!isOpen)}>
      <header>
        <h4>{question.title}</h4>
        <button className="btn">
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{question.info}</p>}
    </article>
  );
};

export default Question;
