import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./pages/Characters";
import Pagination from "./pages/Paginacao";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetched = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetched(info.prev);
  };

  const onNext = () => {
    fetched(info.next);
  };

  useEffect(() => {
    fetched(url);
  }, []);

  return (
    <>
      <Pagination />

      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="container">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
