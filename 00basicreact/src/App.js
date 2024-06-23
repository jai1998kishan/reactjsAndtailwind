import "./App.css";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Welcom from "./components/Welcom";

function App() {
  return (
    <div className="App">
      <Counter />

      {/* using state object to change the message  */}
      {/* <Message></Message> */}

      {/* using props */}
      {/* <Greet name="Moto" heroName="batman">
        <p>This is props child</p>
      </Greet>
      <Greet name="Mahi" heroName="superman">
        <button>Action</button>
      </Greet>
      <Greet name="Rocky" heroName="ironman" />
      <Greet />

      <Welcom name="bruce" heroName="batman">
        this is bruce wane
      </Welcom>
      <Welcom name="clark" heroName="superman">
        this is superman from another world
      </Welcom>
      <Welcom name="diana" heroName="wonder woman">
        this is wonder woman from anothner world
      </Welcom> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
