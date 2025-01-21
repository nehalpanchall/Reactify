import { createRoot } from 'react-dom/client';

import './index.css';
import Todo from './Components/Todo';
import BharatClock from './Components/BharatClock';
import Iterate from './Iterate';
import Calculator from './Components/Calculator';
import FoodMenu from './Components/FoodMenu';

import OnChange from './Components/onChange';

let root = document.getElementById('root');

function MyApp() {
  return (
    <>
      <h1>Custom method!!</h1>
    </>
  );
}

createRoot(root).render(
  <>
    {/* <App rootElement={root} /> */}
    {/* <Counter /> */}
    {/* <PasswordGen /> */}
    {/* <Todo /> */}
    {/* <BharatClock /> */}
    {/* <Iterate /> */}
    {/* <Calculator /> */}
    {/* <FoodMenu /> */}
    <OnChange />
  </>
);
