import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>News Website!</h1>
      <p>Check out the news around the globe! 🌍</p>
    </>
  );
}

export default App;
