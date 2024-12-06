import React, { useState } from "react";

const data = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function TextSearch() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const findData = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setResult("Please enter a word to search.");
      return;
    }

    const found = data.find((value) =>
      value.word.toLowerCase() === text.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Definition:</h2>
      <h2>{result}</h2>
    </div>
  );
}

export default TextSearch;
