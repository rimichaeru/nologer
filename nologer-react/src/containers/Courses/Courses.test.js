import React from "react";
import { render } from "@testing-library/react";
import Courses from "./Courses";

describe("Courses tests", () => {
  it("should render", () => {
    expect(render(<Courses />)).toBeTruthy();
  });
});
