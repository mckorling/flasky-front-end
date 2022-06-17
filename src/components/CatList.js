import "./CatList.css";
import Cat from "./Cat";

const CatList = ({ catData }) => {
  // const catComponenets = [];
  // for (let cat of catData) {
  //   catComponenets.push(
  //     <Cat
  //       key={cat.id}
  //       name={cat.name}
  //       saying={cat.saying}
  //       age={cat.age}
  //       color={cat.color}
  //     ></Cat>
  //   );
  // }
  const catComponenets = catData.map((cat) => (
    <Cat
      key={cat.id}
      name={cat.name}
      saying={cat.saying}
      age={cat.age}
      color={cat.color}
    ></Cat>
  ));

  return (
    <div>
      <h2 className="catList">Super Duper List of Cutie Cats</h2>
      {catComponenets}
    </div>
  );
};

export default CatList;
