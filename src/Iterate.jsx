import IterateProps from './Components/IterateProps';

import css from './Iterate.module.css';

const Iterate = () => {
  const games = ['God of War', 'Spider Man', 'Call of Duty', 'GTA 6'];

  const webSeries = ['Game of Thrones', 'Harry Potter', 'Office', 'Suits'];

  return (
    <>
      <h1 className={`${css['back-ground']} ${css.games} font-bold`}>
        List of PS5 Games
      </h1>

      <IterateProps games={games} x={6} />

      <br />

      {/* Explitcit Return: With curly braces */}
      <h1 className={css['web-series']}>List of Web Series</h1>
      <ul className="list-disc ml-7">
        {webSeries.map((items, index) => {
          return <li key={index}>{items}</li>;
        })}
      </ul>
    </>
  );
};

export default Iterate;
