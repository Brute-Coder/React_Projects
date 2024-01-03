import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QRcode from "./QRcode";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QRcode />
    </>
  );
}

export default App;
