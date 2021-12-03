import "./styles.css";

const Characters = ({ characters = [] }) => {
  return (
    <>
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card" style={{ }}>
            <img className="card-img" src={item.image} alt="" />
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Characters;
