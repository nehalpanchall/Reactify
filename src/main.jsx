import { createRoot } from "react-dom/client";

import Todo from "./Components/Todo.jsx";

import "./index.css";

let root = document.getElementById("root");

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

    <PasswordGen />
  </>
);
