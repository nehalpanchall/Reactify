import IterateProps from './Components/IterateProps';

const Iterate = () => {
  const games = ['God of War', 'Spider Man', 'Call of Duty', 'GTA 6'];

  const webSeries = ['Game of Thrones', 'Harry Potter', 'Office', 'Suits'];

  return (
    <>
      <h1 className="ml-5 font-bold">List of PS5 Games</h1>

      <IterateProps games={games} x={6} />

      <br />

      {/* Explitcit Return: With curly braces */}
      <h1 className="ml-5 font-bold">List of Web Series</h1>
      <ul className="list-disc ml-7">
        {webSeries.map((items, index) => {
          return <li key={index}>{items}</li>;
        })}
      </ul>
    </>
  );
};

export default Iterate;
