import "./App.css";
import CatList from "./components/CatList";
import PropTypes from "prop-types";
import { useState } from "react";

function App() {
  const catData1 = [
    { id: 1, name: "Jeff", saying: "ahoy", age: 5, color: "tabby" },
    { id: 2, name: "Lily", saying: "feed me", age: 2, color: "orange" },
    {
      id: 3,
      name: "Richard",
      saying: "get away human",
      age: 10,
      color: "black",
    },
    { id: 4, name: "Pizza", saying: "no cheese", age: 14, color: "black" },
  ];
  // const catData2 = [
  //   { id: 5, name: "Jeff", saying: "ahoy", age: 5, color: "tabby" },
  //   { id: 6, name: "Lily", saying: "feed me", age: 2, color: "orange" },
  //   {
  //     id: 3,
  //     name: "Richard",
  //     saying: "get away human",
  //     age: 10,
  //     color: "black",
  //   },
  //   { id: 4, name: "Pizza", saying: "no cheese", age: 14, color: "black" },
  // ];

  const [cats, setCats] = useState(catData1);

  // call back function to update state
  // add this as prop to CatList component
  const setCatAge = (id) => {
    console.log("inside setCatAge", id);
    // create a copy of cats
    const newCats = [...cats];
    // increase the age of cat with id
    for (let cat of newCats) {
      if (cat.id === id) {
        cat.age += 1;
      }
    }
    // call setCats to update array
    setCats(newCats);
  };

  const deleteCat = (id) => {
    console.log("delete cat", id);
    // filter out the cats that aren't equal to the id
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <main>
        <CatList
          catData={cats}
          setCatAgeCallback={setCatAge}
          deleteCatCallback={deleteCat}
        ></CatList>
        {/* <CatList catData={catData2}></CatList> */}
      </main>
    </div>
  );
}

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
};

export default App;
