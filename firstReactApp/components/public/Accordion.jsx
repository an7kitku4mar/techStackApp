import React, { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const data = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building UI."
    },
    {
      title: "What is Node.js?",
      content: "Node.js allows running JavaScript on the server."
    },
    {
      title: "What is Full Stack?",
      content: "It means working on both frontend and backend."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-[500px] w-[900px]">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          
          <div
            className="accordion-title"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>

          <div
            className={
              activeIndex === index
                ? "accordion-content show"
                : "accordion-content"
            }
          >
            {item.content}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Accordion;