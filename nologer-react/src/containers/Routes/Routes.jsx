import React from "react";
import styles from "./Routes.module.scss";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Courses from "../Courses"

const Routes = (props) => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/courses">
        <Courses />
      </Route>
    </Switch>
  );
};

export default Routes;
