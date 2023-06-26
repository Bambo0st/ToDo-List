import React, { useState } from "react";

function CreateArea(props) {
  const [data, setData] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value //dynamic key
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.content}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.onAdd(data);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
