import React, { useState } from "react";
import "./accordion.css";

// Single selection Accordion

const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    question: "What are React components?",
    answer:
      "Components are the building blocks of a React application. A component can be a function or a class that optionally accepts input (props) and returns a React element that describes how a section of the UI should appear.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML in React. JSX makes it easier to write and add HTML in React.",
  },
  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is a built-in object that allows components to create and manage their own data. State is mutable and can change over time, typically in response to user actions.",
  },
];

function Accordion() {
  return (
    <div className="wrapper">
      <h1>Simple React Accordion </h1>
      <AccordionData data={data} />
    </div>
  );
}

function AccordionData({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, currOpen, onOpen }) {
  const isOpen = item.id === currOpen;

  function handleToggle(id) {
    onOpen(isOpen ? null : id);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle(item.id)}
    >
      <div className="title">
        <p className="title-header">{item.question}</p>
        <p className="title-icon">{isOpen ? "-" : "+"}</p>
      </div>

      {isOpen && <div className="content">{item.answer}</div>}
    </div>
  );
}

export default Accordion;
