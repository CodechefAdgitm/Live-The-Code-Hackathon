import React, { useState } from "react";
import "./Ask.css";

const faqData = [
  {
    question: "Question 1",
    answer: "Answer to Question 1",
  },
  {
    question: "Question 2",
    answer: "Answer to Question 2",
  },
  {
    question: "Question 3",
    answer: "Answer to Question 3",
  },
  // Add more FAQ items here
];

const Ask = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="question" onClick={() => toggleAccordion(index)}>
              {item.question}
              <div className="arrow-icon">
                <span>&#9660;</span>
              </div>
            </div>
            {activeIndex === index && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ask;
