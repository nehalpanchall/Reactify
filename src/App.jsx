import MyArrowFun from "./Label";
import { A, S } from "./Label";

function App() {
  return (
    <>
      <h1 className="bg-green-400">Hello Vite + React</h1>
      <MyArrowFun label="Arrow" /> <br />
      <A label="Anonyms" />
      <S label="Simple" />
    </>
  );
}

export default App;
