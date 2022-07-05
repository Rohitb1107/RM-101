import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Comments } from "./Components/Comments";
import { Data } from "./data";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Comments data={Data} />
    </div>
  );
}

export default App;
