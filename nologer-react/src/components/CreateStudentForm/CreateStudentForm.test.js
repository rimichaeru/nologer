import React from "react";
import { render } from "@testing-library/react";
import CreateStudentForm from "./CreateStudentForm";

describe("CreateStudentForm tests", () => {
  it("should render", () => {
    expect(render(<CreateStudentForm />)).toBeTruthy();
  });
});
