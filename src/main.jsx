import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Counter from "./Counter.jsx";
import PasswordGen from "./Components/PasswordGen.jsx";

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
