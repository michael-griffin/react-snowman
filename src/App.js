import React from "react";
import "./App.css";
import Snowman from "./Snowman";
import { randomWord, ENGLISH_WORDS} from './words.js';

function App() {
  return (
    <div className="App">
      <Snowman words={ENGLISH_WORDS}/>
    </div>
  );
}

export default App;
