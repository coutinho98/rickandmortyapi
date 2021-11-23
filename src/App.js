import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const urlInitial = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCharacters(urlInitial);
  }, []);

  return (
    <div className="container">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ minWidth: "200" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
