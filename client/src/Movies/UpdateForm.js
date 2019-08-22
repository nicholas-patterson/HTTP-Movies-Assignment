import React, { useState, useEffect } from "react";

const UpdateForm = props => {
  const [updatedInfo, setUpdatedInfo] = useState({});

  const handleChange = e => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value
    });
  };

  console.log(props.match.params.id);
  console.log(props);

  return (
    <>
      <form>
        <input
          type="text"
          name={updatedInfo.title}
          value={updatedInfo.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name={updatedInfo.director}
          value={updatedInfo.director}
          onChange={handleChange}
          placeholder="Director"
        />
        <input
          type="text"
          name={updatedInfo.metascore}
          value={updatedInfo.metascore}
          onChange={handleChange}
          placeholder="Metascore"
        />
        <input
          type="text"
          name={updatedInfo.actors}
          value={updatedInfo.actors}
          onChange={handleChange}
          placeholder="Actors"
        />
      </form>
    </>
  );
};

export default UpdateForm;
