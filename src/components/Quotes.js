import React, { useState } from "react";
import qtos from "../quotes.json";

const colors = ["olive", "gray", "teal", "purple"];



const Quotes = () => {
  const randomIndex = Math.floor(Math.random() * qtos.length);
  const [index, setIndex] = useState(randomIndex);

  const changeUser = () => {
    const randomIndex = Math.floor(Math.random() * qtos.length);
    setIndex(randomIndex);
  };

  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`;
  // document.body.style = `background: red`


  return (
    <div className="cardQuote" style={{ color: colors[randomColor] }}>
      <div className="content1">
        <h1 className="title">"</h1>
        <h1>{qtos[index].quote} </h1>
      </div>
      <div className="content2">
      <h2>{qtos[index].author}</h2>
      <button onClick={changeUser} style={{ backgroundColor: colors[randomColor]}}>
        <i  class="fa-solid fa-angle-right"></i>
      </button>
      
      </div>
    </div>

  );
};

export default Quotes;
