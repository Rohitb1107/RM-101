import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;


// First run npm run dev
// Then npm run json-server