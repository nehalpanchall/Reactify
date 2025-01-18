const IterateProps = ({ games, name = 'Pintu', x } = props) => {
  //   let { games } = props;

  return (
    <>
      {/* Implicit Return: Without curly braces */}

      <ul className="list-disc ml-7">
        {games.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>

      <h1>name is: {name}</h1>

      <h1>Lucky number is:{x}</h1>
    </>
  );
};

export default IterateProps;
