import React, { useState } from "react";
import axios from "axios";

const AddCity = () => {
  const [id, setid] = useState(1);
  const [form, setform] = useState([]);

  const postproblem = () => {
    axios
      .post(`http://localhost:8080/citys`, form)
      .then((res) => {
        console.log(res);
        //   console.log(res.data);
      })
      .then(form);
    // setid(id+1)
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="" onSubmit={postproblem}>
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="population"
          name="population"
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddCity;
