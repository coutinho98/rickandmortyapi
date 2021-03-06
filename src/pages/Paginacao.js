const Paginacao = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <ul>
        {prev ? (
          <li>
            <button onClick={handlePrevious}>Previous</button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Paginacao;
