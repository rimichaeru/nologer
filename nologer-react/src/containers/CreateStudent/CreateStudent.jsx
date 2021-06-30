import React from "react";
import styles from "./CreateStudent.module.scss";
import CreateStudentForm from "../../components/CreateStudentForm";


const CreateStudent = (props) => {



  return (
    <>
      <CreateStudentForm allStudents={props.allStudents} setAllStudents={props.setAllStudents} setUpdateStudents={props.setUpdateStudents} updateStudents={props.updateStudents} />
    </>
  );
};

export default CreateStudent;
