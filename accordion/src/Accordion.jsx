// import React, { useState } from "react";
// import data from "./data";
// import "./style.css";
// function Accordion() {
//   const [itemSelected, setItemSelected] = useState(null);

//   const handleSingle = (id) => {
//     if (itemSelected == id) setItemSelected(null);
//     else setItemSelected(id);
//   };
//   return (
//     <div className="wrapper">
//       <div className="accordian">
//         {data &&
//           data.map((title) => (
//             <div
//               className="title"
//               key={title.id}
//               onClick={() => {
//                 handleSingle(title.id);
//               }}
//             >
//               {title.question}
//               {itemSelected && itemSelected === title.id ? (
//                 <div className="answer">{title.answer}</div>
//               ) : null}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Accordion;

//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
  const handleToggle = () => {
    setEnableMultiSelection(!enableMultiSelection);
    setMultiple([]);
    setSelected(null);
  };

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          handleToggle();
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}
