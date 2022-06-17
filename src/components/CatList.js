import "./CatList.css";
import Cat from "./Cat";
import PropTypes from "prop-types";

const CatList = ({ catData, setCatAgeCallback, deleteCatCallback }) => {
  const catComponenets = catData.map((cat) => (
    <Cat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
      setCatAgeCallback={setCatAgeCallback}
      deleteCatCallback={deleteCatCallback}
    ></Cat>
  ));

  return (
    <div>
      <h2 className="catList">Super Duper List of Cutie Cats</h2>
      {catComponenets}
    </div>
  );
};

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
  setCatAgeCallback: PropTypes.func.isRequired,
  deleteCatCallback: PropTypes.func.isRequired,
};

export default CatList;
