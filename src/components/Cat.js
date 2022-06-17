import "./Cat.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Cat = (props) => {
  const catName = props.name;
  const catColor = props.color;
  const catAge = props.age;

  // const makeCatOlder = () => {
  //   props.setCatAgeCallback(props.id);
  // };

  const [catSaying, setSaying] = useState(props.saying);
  const updateSaying = (event) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "Hi";
    }
    setSaying(newSaying);
  };

  return (
    <section className="rainbow">
      <h3>Name: {catName}</h3>
      <p>Meow: {catSaying} </p>
      <p>
        Change Saying: <input type="text" onChange={updateSaying}></input>
      </p>
      <p>
        Age: {catAge}{" "}
        <button onClick={() => props.setCatAgeCallback(props.id)}>old</button>
      </p>
      <button onClick={() => props.deleteCatCallback(props.id)}>
        Delete Cat
      </button>
      <p>Color: {catColor}</p>
    </section>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default Cat;
