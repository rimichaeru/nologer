import React from "react";
import styles from "./StudentCard.module.scss";
import { useHistory } from "react-router-dom";

const StudentCard = (props) => {
  let history = useHistory();

  const deleteStudent = () => {
    fetch(`http://localhost:8080/remove/${props.studentId}`, {
      method: "delete",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setUpdateStudents(!props.updateStudents);
        console.log(data);
      });
  };

  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <button onClick={props.onClick}>Details</button>
      <div>
        <button
          onClick={() => history.push(`/student/${props.studentId}`)}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          Update
        </button>
        <button
          onClick={deleteStudent}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
