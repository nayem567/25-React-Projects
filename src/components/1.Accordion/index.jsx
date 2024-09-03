// 1. Single Selection Accordion
// 16th August - 2024

// 2. Multiple Selection Accordion
// 17th August - 2024

import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId);
    }

    setMultiple(copyMultiple);
  };

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <h2>Accordion</h2>
      {
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"}
        </button>
      }
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const { id, question, answer } = dataItem;
            return (
              <article key={id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="question-container"
                >
                  <h3 className="question">
                    Question {id} : {question}
                  </h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <p className="answer">Answer : {answer}</p>
                    )
                  : selected === dataItem.id && (
                      <p className="answer">Answer : {answer}</p>
                    )}
              </article>
            );
          })
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </div>
  );
};

export default Accordion;
