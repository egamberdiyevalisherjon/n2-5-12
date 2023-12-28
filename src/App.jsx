import { useState } from "react";
import Cycles from "./Components/Cycles";
// import Hooks from "./Components/Hooks";

function App() {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  return (
    <>
      <h1>Hammaga salom!</h1>
      <button onClick={() => setShow(!show)}>show</button>
      <button onClick={() => setAge(age + 1)}>inc</button>
      {show && (
        // <Hooks
        //   age={32}
        //   user={{
        //     fName: "Eshmat",
        //     lName: "toshmatov",
        //     email: "eshmat@gmail.com",
        //   }}
        // />
        <Cycles age={age} />
      )}
    </>
  );
}

export default App;
