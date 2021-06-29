import React from "react";
import styles from "./Routes.module.scss";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Student from "../Student";

const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/">
        <Home allStudents={props.allStudents} />
      </Route>
      <Route exact path="/:id">
        <Student allStudents={props.allStudents} />
      </Route>
    </Switch>
  );
};

export default Routes;
