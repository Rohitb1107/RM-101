import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  function getData() {
    axios
      .get("http://localhost:8080/country")
      .then((res) => {
        setCountryData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
  useEffect(() => {
    getData();
  }, []);

  function changeHandler(e) {
    setSearchItem(e.target.value);
  }

  return (
    <div className="App">
      <div className="nav-div">
        <h1>React Search Bar</h1>
      </div>

      <div className="search-div">
        <input type="text" placeholder="Search..." onChange={changeHandler} />
        {countryData.map((item) => {
          return (
            <div className="content-div">
              <p>{item.country}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

{
  /* <form className="d-flex" role="search">
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
  />
  <button type="button" class="btn btn-info">
    Search
  </button>
</form>; */
}
