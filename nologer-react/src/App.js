import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
