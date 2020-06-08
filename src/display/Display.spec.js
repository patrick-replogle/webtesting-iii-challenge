// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Display from "./Display";

afterEach(rtl.cleanup);

test("Display renders", () => {
  const wrapper = rtl.render(<Display />);
  expect(wrapper).toBeDefined();
  expect(wrapper).not.toBeUndefined();
  expect(wrapper).not.toBeFalsy();
});

test("Test if gate defaults to open and unlocked", () => {
  const { getByText } = rtl.render(<Display />);

  const open = getByText(/open/i);
  const unlocked = getByText(/unlocked/i);

  expect(open).toBeDefined();
  expect(unlocked).toBeDefined();
});

test("Displays closed if closed prop is true", () => {
  const { container } = rtl.render(<Display closed={true} />);
  const closed = rtl.getByText(container, /closed/i);
  expect(closed).toBeTruthy();
});

test("Displays open if closed prop is false", () => {
  const { container } = rtl.render(<Display closed={false} />);
  const open = rtl.getByText(container, /open/i);

  expect(open).toBeTruthy();
});

test("Displays locked if locked prop is true", () => {
  const { container } = rtl.render(<Display locked={true} />);
  const locked = rtl.getByText(container, /locked/i);

  expect(locked).toBeTruthy();
});

test("Displays unlocked if locked prop is false", () => {
  const { getByText } = rtl.render(<Display locked={false} />);
  expect(getByText(/unlocked/i));
});

test("Uses red-led class if locked", () => {
  const { container } = rtl.render(<Display locked={true} />);

  expect(container.classList.contains("red-led"));
});

test("Uses red-led class if closed", () => {
  const { container } = rtl.render(<Display closed={true} />);

  expect(container.classList.contains("red-led"));
});

test("When unlocked and open use `green-led` class", () => {
  const { container } = rtl.render(<Display locked={false} closed={false} />);
  const greenLed = container.querySelectorAll(".green-led");

  expect(greenLed.length).toBe(2);
});
