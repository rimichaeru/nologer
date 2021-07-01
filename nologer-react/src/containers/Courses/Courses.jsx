import React, { useEffect, useState } from "react";
import styles from "./Courses.module.scss";
import CourseCard from "../../components/CourseCard/CourseCard";
import CourseForm from "../../components/CourseForm";

const Courses = () => {
  const [renderCourses, setRenderCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateRender, setUpdateRender] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/courses/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRenderCourses(
          data.map((course) => {
            return <CourseCard key={course.id + course.name} course={course} updateRender={updateRender} setUpdateRender={setUpdateRender} />;
          })
        );
      });
  }, [showForm, updateRender]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Courses</h1>
        <button className={styles.addCourse} onClick={() => setShowForm(true)}>Add Course</button>
      </div>
      
      {showForm ? <CourseForm setShowForm={setShowForm} /> : <div className={styles.courseGrid}>{renderCourses}</div>}
    </div>
  );
};

export default Courses;
