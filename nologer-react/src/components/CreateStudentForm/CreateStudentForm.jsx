import React, { useEffect } from "react";
import styles from "./CreateStudentForm.module.scss";
import { useParams } from "react-router-dom";

const CreateStudentForm = (props) => {
  // const { updateId } = useParams("updateId");

  // console.log(updateId);
  const updateId = null;

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
        console.log(data);
        alert(`${newStudent.firstName} has been created`);
        props.setShowForm(false);
      });
  };

  const updateExistingStudent = () => {
    fetch(`http://localhost:8080/student/${props.formData.id}`, {
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
        console.log(data);
        alert(`${newStudent.firstName} has been modified`);
        props.setShowForm(false);
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
          defaultValue={props.formData ? props.formData.firstName : null}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={props.formData ? props.formData.lastName : null}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter Age"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={props.formData ? props.formData.age : null}
        />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          onBlur={(e) => updateStudent(e.target.name, e.target.value)}
          defaultValue={props.formData ? props.formData.location : null}
        />
        <input
          type="text"
          name="interests"
          id="interests"
          placeholder="Enter Interests"
          onBlur={(e) => updateStudent(e.target.name, [e.target.value])}
          defaultValue={props.formData ? props.formData.interests : null}
        />

        <div className={styles.buttons}>
          <button onClick={() => props.setShowForm(false)}>Cancel</button>
          {props.formData ? (
            <button onClick={updateExistingStudent}>Update Details</button>
          ) : (
            <button onClick={createStudent}>Add Student</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateStudentForm;
