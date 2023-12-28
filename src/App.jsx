// import { useState } from "react";
// import Cycles from "./Components/Cycles";
// import Hooks from "./Components/Hooks";

import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import AdminLayout from "./Layouts/Admin";
import LandingPage from "./Pages/LandingPage";

function App() {
  // const [show, setShow] = useState(false);
  // const [age, setAge] = useState(0);
  return (
    <>
      <Routes>
        {/* Nested Routes */}
        <Route path="/main" element={<Header />}>
          <Route path="/main" element={<Home />} />
          <Route path="/main/about" element={<About />} />
          <Route path="/main/contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <h1>Hammaga salom!</h1>
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
      )} */}
    </>

    // React.createElement("div", null, [
    //   React.createElement("h1", { key: 1 }, "Hammaga Salom!"),
    //   React.createElement(
    //     "button",
    //     { key: 2, onClick: () => setShow(!show) },
    //     "show"
    //   ),
    //   React.createElement(
    //     "button",
    //     { key: 3, onClick: () => setAge(age + 1) },
    //     "inc"
    //   ),
    //   show && React.createElement(Cycles, { key: 4, age }),
    // ])
  );
}

export default App;
