const Iterate = () => {
  const games = ["God of War", "Spider Man", "Call of Duty", "GTA 6"];
  return (
    <>
      <h1>PS5 Game</h1>
      <ul className="list-disc pl-5">
        {games.map((elements) => (
          <li>{elements}</li>
        ))}
      </ul>
    </>
  );
};

export default Iterate;
