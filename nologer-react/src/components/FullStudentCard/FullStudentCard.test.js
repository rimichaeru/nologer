import React from "react";
import { render } from "@testing-library/react";
import FullStudentCard from "./FullStudentCard";

describe("FullStudentCard tests", () => {
  it("should render", () => {
    expect(render(<FullStudentCard />)).toBeTruthy();
  });
});
