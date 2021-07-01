import React, { useState } from "react";
import styles from "./CourseForm.module.scss";

const CourseForm = (props) => {
  let newCourse = {
    id: "",
    name: "",
    desc: "",
    start: "",
    lecturer: "",
  };

  const updateCourse = (field, value) => {
    newCourse[field] = value;
  };

  const createCourse = () => {
    fetch("http://localhost:8080/course", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(`${newCourse.name} has been created`);
        props.setShowForm(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Course Name"
          onBlur={(e) => updateCourse(e.target.name, e.target.value)}
        />
        <textarea
          type="text"
          name="desc"
          id="desc"
          placeholder="Description"
          rows="4"
          style={{ resize: "none" }}
          onBlur={(e) => updateCourse(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="start"
          id="start"
          placeholder="Start Date"
          onBlur={(e) => updateCourse(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="lecturer"
          id="lecturer"
          placeholder="Lecturer"
          onBlur={(e) => updateCourse(e.target.name, e.target.value)}
        />

        <div className={styles.buttons}>
          <button onClick={() => props.setShowForm(false)}>Cancel</button>
          <button onClick={createCourse}>Add Course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
