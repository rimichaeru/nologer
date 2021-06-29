import React from "react";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard";
import { useHistory } from "react-router-dom";


const Home = (props) => {
  const [renderGrid, setRenderGrid] = useState([]);
  
  let history = useHistory();

  useEffect(() => {
    if (props.allStudents) {
      const renderList = props.allStudents.map((student, index) => {
        return <StudentCard name={student.firstName} onClick={() => history.push(`${index}`)} />;
      });
      setRenderGrid(renderList);
    }
  }, [props.allStudents]);


  return (
    <div className="App">
      <div className="student-container">
        <h1 className="student-heading">Students</h1>

        <div className="student-card-grid">{renderGrid}</div>
      </div>
    </div>
  );
};

export default Home;
