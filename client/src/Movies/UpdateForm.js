import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = props => {
  console.log("PROPS IN UPDATE FORM", props);
  const [updatedInfo, setUpdatedInfo] = useState({});

  console.log(props.match.params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => {
        console.log("RES IN UPDATE FORM", res);
        setUpdatedInfo({ ...res.data });
      });
  }, []);

  console.log("UPDATED INFO ARRAY", updatedInfo);

  const handleChange = e => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/movies/${props.match.params.id}`,
        updatedInfo
      )
      .then(res => {
        console.log(res);
        setUpdatedInfo("");
        props.history.push("/");
      })

      .catch(err => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={updatedInfo.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="director"
          value={updatedInfo.director}
          onChange={handleChange}
          placeholder="Director"
        />
        <input
          type="text"
          name="metascore"
          value={updatedInfo.metascore}
          onChange={handleChange}
          placeholder="Metascore"
        />
        <input
          type="text"
          name="actors"
          value={updatedInfo.actors}
          onChange={handleChange}
          placeholder="Actors"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UpdateForm;
