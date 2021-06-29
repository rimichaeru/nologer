import React from "react";
import { render } from "@testing-library/react";
import Student from "./Student";

describe("Student tests", () => {
  it("should render", () => {
    expect(render(<Student />)).toBeTruthy();
  });
});
