import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const emojiDictionary = {
  "❤️": "Red Heart",
  "💥": "Collision",
  "🍉": "Watermelon",
  "🧭": "Compass",
  "⛰️": "Mountain",
  "🏴": "Black Flag",
  "😂":"Face with Tears of Joy",
  "🤩":"Star-Struck",
  "🙈":"See-No-Evil Monkey",
  "❤️‍🔥":"Heart on Fire"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(e) {
    var userInput = e.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning == undefined) {
      meaning = "Not present in Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning}</h2>

      <h3>Emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
