import React from "react";
import styles from "./CourseCard.module.scss";
import { useHistory } from "react-router-dom";

const CourseCard = (props) => {
  let history = useHistory();

  const deleteCourse = () => {
    fetch(`http://localhost:8080/delete-course/${props.course.id}`, {
      method: "delete",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.setUpdateRender(!props.updateRender)
        history.push("/courses")
      });
  };

  return (
    <div className={styles.container}>
      <p style={{ width: 20 }}>{props.course.id}/</p>
      <p style={{ width: 200, textAlign: "center", fontWeight: 700 }}>
        {props.course.name}
      </p>
      <p style={{ width: 140 }}>Start: {props.course.start}</p>
      <p style={{ color: "fuchsia", width: 140 }}>{props.course.lecturer}</p>
      <p> {props.course.desc}</p>
      <button onClick={deleteCourse}>X</button>
    </div>
  );
};

export default CourseCard;
