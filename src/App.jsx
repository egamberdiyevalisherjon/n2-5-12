import React, { useState } from "react";
import Cycles from "./Components/Cycles";
// import Hooks from "./Components/Hooks";

function App() {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  return (
    // <>
    //   <h1>Hammaga salom!</h1>
    //   <button onClick={() => setShow(!show)}>show</button>
    //   <button onClick={() => setAge(age + 1)}>inc</button>
    //   {show && (
    //     // <Hooks
    //     //   age={32}
    //     //   user={{
    //     //     fName: "Eshmat",
    //     //     lName: "toshmatov",
    //     //     email: "eshmat@gmail.com",
    //     //   }}
    //     // />
    //     <Cycles age={age} />
    //   )}
    // </>

    React.createElement("div", null, [
      React.createElement("h1", { key: 1 }, "Hammaga Salom!"),
      React.createElement(
        "button",
        { key: 2, onClick: () => setShow(!show) },
        "show"
      ),
      React.createElement(
        "button",
        { key: 3, onClick: () => setAge(age + 1) },
        "inc"
      ),
      show && React.createElement(Cycles, { key: 4, age }),
    ])
  );
}

export default App;
