import React from "react";
import styles from "./FullStudentCard.module.scss";

const FullStudentCard = (props) => {
  return (
    <div className={styles.container}>

      <div className={styles.infoContainer}>

      <h3>{props.firstName}</h3>
      <h3>{props.lastName}</h3>
      <h3>{props.age}</h3>
      <h3>{props.location}</h3>
      <h3>{props.interests}</h3>
      </div>
    </div>
  );
};

export default FullStudentCard;
