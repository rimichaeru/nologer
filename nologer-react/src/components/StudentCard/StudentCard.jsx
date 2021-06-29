import React from "react";
import styles from "./StudentCard.module.scss";

const StudentCard = (props) => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <h2>{props.name}</h2>
    </div>
  );
};

export default StudentCard;
