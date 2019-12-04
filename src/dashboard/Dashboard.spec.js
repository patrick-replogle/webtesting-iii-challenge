// Test away
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

//this allows react-testing-library to do some routine cleanup after each test
afterEach(rtl.cleanup);

test.only("Dashboard renders", () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper).toBeDefined();
  expect(wrapper).not.toBeUndefined();
  expect(wrapper).not.toBeFalsy();
});
