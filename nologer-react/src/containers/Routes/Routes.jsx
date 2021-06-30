import React from "react";
import styles from "./Routes.module.scss";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Student from "../Student";
import CreateStudent from "../CreateStudent";

const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/">
        <Home allStudents={props.allStudents} setUpdateStudents={props.setUpdateStudents} updateStudents={props.updateStudents}/>
      </Route>
      <Route path="/student/:updateId">
        <CreateStudent allStudents={props.allStudents} setAllStudents={props.setAllStudents} setUpdateStudents={props.setUpdateStudents} updateStudents={props.updateStudents}/>
      </Route>
      <Route exact path="/student">
        <CreateStudent allStudents={props.allStudents} setAllStudents={props.setAllStudents} setUpdateStudents={props.setUpdateStudents} updateStudents={props.updateStudents}/>
      </Route>
      <Route path="/:id">
        <Student allStudents={props.allStudents} />
      </Route>
    </Switch>
  );
};

export default Routes;
