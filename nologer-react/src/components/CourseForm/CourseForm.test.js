import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

describe("CourseForm tests", () => {
  it("should render", () => {
    expect(render(<CourseForm />)).toBeTruthy();
  });
});
