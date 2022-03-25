import React from "react";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Getinfo from "./components/Info/Getinfo";

function App() {
  return (
    <>
      <Logo />
      <Header page="1" />
      <Getinfo />
    </>
  );
}

export default App;
