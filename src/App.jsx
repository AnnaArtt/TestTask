import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  useEffect(() => {
    console.log("render app");
  }, []);
  return <HomePage />;
}

export default App;
