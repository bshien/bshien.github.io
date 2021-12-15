import NavBar from "./NavBar";
import Head from "./Head";
import ProgBar from "./ProgBar";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";

function App() {
  const [prog, setProg] = useState(20);
  return (
    <>
      <Head />
      <ProgBar prog={prog} />
      <NavBar changeProg={setProg} />
    </>
  );
}

export default App;
