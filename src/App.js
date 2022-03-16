import React from "react";
import { Route, Routes } from "react-router-dom";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/search" element={<Secondpage />} />
      </Routes>
    </>
  );
}

export default App;
