import React, { useState } from "react";
// here will search the text , need to support partial , full text ,  case  and also we need to handle the error

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function TextSearch() {
  const [text, setText] = useState("hi bro");
  const [result , setResult] = useState();

  // basics tructure is completed
  const findData = (e) => {
    e.preventDefault();
    const found = data.find((value) => text.toLowerCase() === value.word.toLowerCase());

    if (found) {
      setResult(found.meaning);
    }else{
      setResult("Word not found in the dictionary.")
    }

  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={findData}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Enter a word..."
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <h2>Definition : </h2>
      <h2>{result}</h2>
    </div>
  );
}

export default TextSearch;
