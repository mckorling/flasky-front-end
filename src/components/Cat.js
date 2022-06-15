import "./Cat.css";
import PropTypes from "prop-types";

const Cat = (props) => {
  const catName = props.name;
  const catSaying = props.saying;
  const catAge = props.age;
  const catColor = props.color;
  return (
    <section className="rainbow">
      <h3>Name: {catName}</h3>
      <p>Meow: {catSaying}</p>
      <p>Age: {catAge}</p>
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
