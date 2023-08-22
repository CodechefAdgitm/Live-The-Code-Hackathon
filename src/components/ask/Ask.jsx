import React, { useState } from "react";
import "./Ask.css";

const faqData = [
  {
    question: "Is Hackathon online or offline ",
    answer: `Hackathon will be conducted completely in online mode`,
  },
  {
    question: "I have no idea what coding is",
    answer: "Thats why you must attend our event, we will guide you through everything with awesome workshops,tech talk and many more",
  },
  {
    question: "Do I need to pay any money ",
    answer: "Absolutely not ! our event is free and open for all , if incase anyone asks for money you can dm any of our moderator.",
  },
  {
    question: "What are the conduct of guidlines ",
    answer: "We strongly follow the DEVFOLIO code of conduct, Our team members will enforce this code throughout the event.",
  },
  {
    question: "Is it necessary to form the team of 4 students",
    answer: "No the team can range from 1 to 4 members.",
  },
  {
    question: "How to participate",
    answer: "All you need is to fill our the devfolio form and we will guide you through everything in email.",
  },
  {
    question: "I have more doubts",
    answer: "Reach us directly at (codechefadgitmchapter@gmail.com) we would happy to help you.",
  },
  {
    question: "Is the registration open to all colleges",
    answer: "Yes, it's open to all engineering/ polytechnic/ science colleges.",
  },
  {
    question: "Can the team member be from the different college",
    answer: "Yes, all members can be from different colleges, departments and years.",
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
       <div className="heading"><h2>Frequently Asked Questions</h2></div>
    
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
