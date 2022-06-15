import "./App.css";
import CatList from "./components/CatList";
import PropTypes from "prop-types";

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
  const catData2 = [
    { id: 5, name: "Jeff", saying: "ahoy", age: 5, color: "tabby" },
    { id: 6, name: "Lily", saying: "feed me", age: 2, color: "orange" },
    {
      id: 3,
      name: "Richard",
      saying: "get away human",
      age: 10,
      color: "black",
    },
    { id: 4, name: "Pizza", saying: "no cheese", age: 14, color: "black" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <main>
        <CatList catData={catData1}></CatList>
        <CatList catData={catData2}></CatList>
      </main>
    </div>
  );
}

CatList.propTypes = {
  catData: PropTypes.array.isRequired,
};

export default App;
