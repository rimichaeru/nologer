import React from "react";
import { render } from "@testing-library/react";
import StudentCard from "./StudentCard";

describe("StudentCard tests", () => {
  it("should render", () => {
    expect(render(<StudentCard />)).toBeTruthy();
  });
});
