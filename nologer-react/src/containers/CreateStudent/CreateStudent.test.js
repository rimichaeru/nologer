import React from "react";
import { render } from "@testing-library/react";
import CreateStudent from "./CreateStudent";

describe("CreateStudent tests", () => {
  it("should render", () => {
    expect(render(<CreateStudent />)).toBeTruthy();
  });
});
