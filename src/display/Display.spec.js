// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Display from "./Display";

afterEach(rtl.cleanup);

test("Display renders", async () => {
  const wrapper = rtl.render(<Display />);
  expect(wrapper).toBeDefined();
  expect(wrapper).not.toBeUndefined();
  expect(wrapper).not.toBeFalsy();
});
