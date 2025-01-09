import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";

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
    <App />

    {/* <Counter /> */}
  </>
);
