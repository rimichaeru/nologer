import React, { useState } from "react";
import styles from "./StudentCard.module.scss";
import { useHistory } from "react-router-dom";

const StudentCard = (props) => {
  let history = useHistory();

  const deleteStudent = () => {
    fetch(`http://localhost:8080/delete-student/${props.student.id}`, {
      method: "delete",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.setUpdateRender(!props.updateRender)
        history.push("/")
      });
  };

  return (
    <div className={styles.container}>
      <h2 style={{ margin: 8 }}>
        {props.student.firstName} {props.student.lastName}
      </h2>

      <div>
        <div className={styles.infoContainer}>
          <p>{props.student.age}</p>
          <p>{props.student.location}</p>
          <p>{props.student.interests}</p>
        </div>
      </div>

      <div>
        <button
          onClick={() => props.handleForm(props.student)}
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
