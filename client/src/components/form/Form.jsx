import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [life, setLife] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [types, setTypes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Life:
        <input
          type="number"
          value={life}
          onChange={(e) => setLife(e.target.value)}
        />
      </label>
      <label>
        Attack:
        <input
          type="number"
          value={attack}
          onChange={(e) => setAttack(e.target.value)}
        />
      </label>
      <label>
        Defense:
        <input
          type="number"
          value={defense}
          onChange={(e) => setDefense(e.target.value)}
        />
      </label>
      <label>
        Speed:
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Types:
        <select
          multiple
          value={types}
          onChange={(e) =>
            setTypes(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {/* add options for each available type here */}
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          {/* ... */}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
