import { useState } from "react";

import "./App.css";
import { NavbarSide } from "./components/navsidebar";
import { Routes, Route } from "react-router-dom";
import { Newtask } from "./components/newTask";
import { Edit } from "./components/taskedit";
import { Summary } from "./components/summary";
import { Login } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div id="frontPage">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/new" element={<Newtask />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
