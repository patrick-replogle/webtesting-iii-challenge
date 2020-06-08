import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

test("Dashboard renders", () => {
  const container = rtl.render(<Dashboard />);
  expect(container).toBeDefined();
  expect(container).toBeTruthy();
});

test("it shows the controls and display", () => {
  const { container } = rtl.render(<Dashboard />);

  const display = rtl.getByText(container, /open/i);
  const controls = rtl.getByText(container, /close gate/i);

  expect(display).toBeTruthy();
  expect(display).toBeVisible();
  expect(controls).toBeTruthy();
  expect(controls).toBeVisible();
});

//snapshot test
test("<Dashboard/> snapshot", async () => {
  const wrapper = rtl.render(<Dashboard />);
  await wrapper.getByText(/open/i);

  expect(wrapper.asFragment()).toMatchSnapshot();
});
