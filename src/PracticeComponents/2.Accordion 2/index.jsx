// 1. Single Selection Accordion
// 2. Multiple Selection Accordion

import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion2 = () => {
  const [selected, setSelected] = useState([]);
  const [multiSelection, setMultiselection] = useState(false);

  const handleToggle = () => {
    setMultiselection(!multiSelection);
    setSelected([]);
  };

  const handleSelect = (currentId) => {
    if (multiSelection) {
      setSelected((prevSelected) =>
        prevSelected.includes(currentId)
          ? prevSelected.filter((item) => item !== currentId)
          : [...prevSelected, currentId]
      );
    } else {
      // setSelected(currentId === selected ? null : currentId);
      setSelected((prevSelected) =>
        prevSelected.includes(currentId) ? [] : [currentId]
      );
    }
  };

  return (
    <div className="wrapper">
      <h2>Accordion 2</h2>
      <button onClick={handleToggle}>
        {!multiSelection ? "Enable Multiselection" : "Disable Multiselection"}
      </button>
      {data.map((dataItem) => {
        const { id, question, answer } = dataItem;
        return (
          <article key={id} onClick={() => handleSelect(id)}>
            <div className="question-container">
              <h3>
                Question {dataItem.id} : {question}
              </h3>
              <span> + </span>
            </div>
            {selected.includes(id) && <p>Answer: {answer}</p>}
          </article>
        );
      })}
    </div>
  );
};

export default Accordion2;
