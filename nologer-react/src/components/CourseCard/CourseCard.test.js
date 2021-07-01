import React from "react";
import { render } from "@testing-library/react";
import CourseCard from "./CourseCard";

describe("CourseCard tests", () => {
  it("should render", () => {
    expect(render(<CourseCard />)).toBeTruthy();
  });
});
