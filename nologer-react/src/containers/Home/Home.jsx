import React from "react";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard";
import { useHistory } from "react-router-dom";
import CreateStudentForm from "../../components/CreateStudentForm";

const Home = (props) => {
  const [renderGrid, setRenderGrid] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);
  const [updateRender, setUpdateRender] = useState(true);

  const handleForm = (studentData = null) => {
    if (!studentData) {
      setFormData(null);
      setShowForm(true);
      return;
    }
    setFormData(studentData);
    setShowForm(true);
  };

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRenderGrid(
          data.map((student) => {
            return (
              <StudentCard
                key={student.id + student.firstName + student.lastName}
                student={student}
                updateRender={updateRender}
                setUpdateRender={setUpdateRender}
                handleForm={handleForm}
              />
            );
          })
        );
      });
  }, [showForm, updateRender]);

  return (
    <div className="App">
      <div className={styles.studentContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Students</h1>
          <button className={styles.addStudent} onClick={handleForm}>
            Add Student
          </button>
        </div>

        {showForm ? (
          <CreateStudentForm formData={formData} setShowForm={setShowForm} />
        ) : (
          <div className={styles.studentGrid}>{renderGrid}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
