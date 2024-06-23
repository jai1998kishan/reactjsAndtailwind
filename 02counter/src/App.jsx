import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    // setCounter(counter);
    // setCounter(counter + 1);
    // counter < 20 ? setCounter(counter + 1) : setCounter(20);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    // console.log("clicked", counter);
    // setCounter(counter - 1);
    // counter > 0 ? setCounter(counter - 1) : setCounter(0);
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
