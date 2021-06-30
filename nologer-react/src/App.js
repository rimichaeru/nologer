import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";

function App() {
  const [allStudents, setAllStudents] = useState(null);
  const [updateStudents, setUpdateStudents] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllStudents(data);
        console.log(data);
      });
  }, [updateStudents]);

  return (
    <Router>
      <NavBar />

      <Routes allStudents={allStudents} setAllStudents={setAllStudents} setUpdateStudents={setUpdateStudents} updateStudents={updateStudents} />
    </Router>
  );
}

export default App;
