import React, { useEffect, useState } from "react";
import axios from "axios";

const TableData = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    handleData();
  }, [order, country]);

  const CountryFilter = (value, change) => {
    setCountry(change);
    setOrder(value);
  };

  const handleData = () => {
    axios
      .get(`http://localhost:8080/citys?_sort=${country}&_order=${order}`)
      .then((res) => {
        setData(res.data);
      });
  };

  // console.log(data)

  const Delete = (id) => {
    axios.delete(`http://localhost:8080/citys/${id}`).then((res) => {
      setData([...res.data]);
    });
  };

  return (
    <div className="filter-div">
      <button
        type="button"
        class="btn btn-success"
        onClick={() => CountryFilter("asc", "country")}
      >
        ascending
      </button>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => CountryFilter("desc", "country")}
      >
        decending
      </button>
      <button
        type="button"
        class="btn btn-info"
        onClick={() => CountryFilter("desc", "population")}
      >
        high to low
      </button>
      <button
        type="button"
        class="btn btn-info"
        onClick={() => CountryFilter("asc", "population")}
      >
        low to high
      </button>
      <div className="table-div">
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="Country">{e.country}</td>
                <td className="city">{e.city}</td>
                <td className="population">{e.population}</td>
                <td className="edit">
                  <button type="button" class="btn btn-primary">
                    Edit
                  </button>
                </td>
                <td className="delete">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      Delete(e.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
