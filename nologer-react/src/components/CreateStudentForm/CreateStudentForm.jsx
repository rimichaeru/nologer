import React, { useEffect } from "react";
import styles from "./CreateStudentForm.module.scss";
import { useParams } from "react-router-dom";

const CreateStudentForm = (props) => {

  const { updateId } = useParams("updateId");

  console.log(updateId);

  let newStudent = {
    id: "",
    firstName: "",
    lastName: "",
    age: "",
    location: "",
    interests: [],
  };

  const updateStudent = (field, value) => {
    newStudent[field] = value;
  };

  const createStudent = () => {
    fetch("http://localhost:8080/student", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setUpdateStudents(!props.updateStudents);
        console.log(data);
      });
  };

  const updateExistingStudent = () => {
    fetch(`http://localhost:8080/student/${updateId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
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
      <div className={styles.form}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={updateId ? props.allStudents[updateId].firstName : null}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={updateId ? props.allStudents[updateId].lastName : null}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter Age"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={updateId ? props.allStudents[updateId].age : null}
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={updateId ? props.allStudents[updateId].location : null}
        />
        <input
          type="text"
          name="interests"
          id="interests"
          placeholder="Enter Interests"
          onBlur={(e) => updateStudent(e.target.name, [e.target.value])}
          defaultValue={updateId ? props.allStudents[updateId].interests : null}
        />
        {updateId ? (
          <button onClick={updateExistingStudent}>Update Details</button>
        ) : (
          <button onClick={createStudent}>Add Student to Database</button>
        )}
      </div>
    </div>
  );
};

export default CreateStudentForm;
