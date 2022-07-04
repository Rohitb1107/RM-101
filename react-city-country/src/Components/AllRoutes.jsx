import React from "react";
import Navbar from "./Navbar";
import TableData from "./TableData";
import { Routes, Route } from "react-router-dom";
import AddCity from "./AddCity";
import AddCountry from "./AddCountry";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/addcity" element={<AddCity />}></Route>
        <Route path="/addcountry" element={<AddCountry />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
