import React from "react";
import styles from "./NavBar.module.scss";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  let history = useHistory();

  return (
    <div className={styles.container}>
      <p className={styles.heading}>_nologer</p>
      <div className={styles.buttonContainer}>
        <button onClick={() => history.push("/")}>Students</button>
        <button onClick={() => history.push("/courses")}>Courses</button>
      </div>
    </div>
  );
};

export default NavBar;
