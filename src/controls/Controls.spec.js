// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);

//test if control component renders
test("Controls component renders", () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper).toBeDefined();
});

//test if buttons are present
test("Buttons are provided to toggle closed and locked states", () => {
  const { getByText } = rtl.render(<Controls />);

  const closeGate = getByText(/close gate/i);
  const lockGate = getByText(/lock gate/i);

  expect(closeGate).toBeDefined();
  expect(lockGate).toBeDefined();
});
