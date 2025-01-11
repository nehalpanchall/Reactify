import Card from "./Card";
import BgChanger from "./components/BgChanger";
import MyArrowFun from "./Label";
import { A, S } from "./Label";

function App() {
  let details =
    "React.js Library is really amazing to learn after mastering JavaScript concepts including ES6";

  let hashTags = ["Hooks", "Props", "TailWind"];

  let myObj = { fname: "Nehal", lname: "Panchal" };

  return (
    <>
      <h1 className="bg-green-400">Hello Vite + React</h1>
      <MyArrowFun label="Arrow" /> <br />
      <A label="Anonyms" />
      <S label="Simple" />
      <Card
        cardName="Vite + React Card"
        cardInfo={details}
        tags={hashTags}
        intro={myObj}
      />
      <Card
        cardName="Tailwind Card"
        cardInfo={"TailWind is the latest framwork of CSS"}
        tags={hashTags}
        intro={myObj}
      />
      <BgChanger />
    </>
  );
}

export default App;
