import React from "react";
import styles from "./Student.module.scss";
import FullStudentCard from "../../components/FullStudentCard";
import { useParams } from "react-router-dom";

const Student = (props) => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <FullStudentCard
        firstName={props.allStudents[id].firstName}
        lastName={props.allStudents[id].lastName}
        age={props.allStudents[id].age}
        location={props.allStudents[id].location}
        interests={props.allStudents[id].interests}
      />
    </div>
  );
};

export default Student;
