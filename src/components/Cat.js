import "./Cat.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Cat = (props) => {
  const [catAge, setCatAge] = useState(props.age);
  const makeCatOlder = () => {
    setCatAge(catAge + 1);
  };
  const [catSaying, setSaying] = useState(props.saying);
  const updateSaying = (event) => {
    let newSaying = event.target.value;
    if (newSaying === "") {
      newSaying = "Hi";
    }
    setSaying(newSaying);
  };
  const catName = props.name;
  //const catSaying = props.saying;
  //const catAge = props.age; using a state variable now for age
  const catColor = props.color;
  return (
    <section className="rainbow">
      <h3>Name: {catName}</h3>
      <p>Meow: {catSaying} </p>
      <p>
        Change Saying: <input type="text" onChange={updateSaying}></input>
      </p>
      <p>
        Age: {catAge} <button onClick={makeCatOlder}>old</button>
      </p>
      <p>Color: {catColor}</p>
    </section>
  );
};

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  saying: PropTypes.string.isRequired,
};

export default Cat;
