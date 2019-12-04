// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);

test("Controls render", async () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper).toBeDefined();
  expect(wrapper).not.toBeUndefined();
  expect(wrapper).not.toBeFalsy();
});
