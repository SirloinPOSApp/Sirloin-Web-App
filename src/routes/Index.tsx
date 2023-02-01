import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import "../styles/App.css";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Register />
    </div>
  );
}

export default Index;
