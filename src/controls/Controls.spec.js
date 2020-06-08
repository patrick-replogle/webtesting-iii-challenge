// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";
import { fireEvent } from "react-testing-library";

afterEach(rtl.cleanup);

test("Controls component renders", () => {
  const wrapper = rtl.render(<Controls />);
  expect(wrapper).toBeDefined();
});

test("Buttons are provided to toggle closed and locked states", () => {
  const { getByText } = rtl.render(<Controls />);

  const closeGate = getByText(/close gate/i);
  const lockGate = getByText(/lock gate/i);

  expect(closeGate).toBeDefined();
  expect(lockGate).toBeDefined();
});

test("Open button text changes to reflect the state the door will be in if clicked", () => {
  const mockToggleClosed = jest.fn();
  const { getByText, findByText } = rtl.render(
    <Controls closed={false} locked={false} toggleClosed={mockToggleClosed} />
  );

  const closeBtn = getByText(/close gate/i);
  expect(closeBtn).toBeTruthy();

  fireEvent.click(closeBtn);

  const openBtn = findByText(/open gate/i);

  expect(openBtn).toBeDefined();
  expect(mockToggleClosed).toHaveBeenCalled();
});

test("Lock button text changes to reflect the state the door will be in if clicked", () => {
  const toggleLocked = jest.fn();
  const { getByText, findByText } = rtl.render(
    <Controls locked={true} closed={true} toggleLocked={toggleLocked} />
  );

  const lockBtn = getByText(/unlock gate/i);
  expect(lockBtn).toBeDefined();
  fireEvent.click(lockBtn);

  const unlockBtn = findByText(/lock gate/i);

  expect(unlockBtn).toBeDefined();
  expect(toggleLocked).toHaveBeenCalled();
});

test("Closed toggle button is disabled if gate is locked", () => {
  const toggleClosed = jest.fn();
  const { getByText } = rtl.render(
    <Controls locked={true} closed={true} toggleClosed={toggleClosed} />
  );

  const gateBtn = getByText(/open gate/i);
  expect(gateBtn).toBeDefined();

  fireEvent.click(gateBtn);

  expect(toggleClosed).not.toHaveBeenCalled();
});

test("Locked toggle button is disabled if gate is open", () => {
  const mockToggleOpen = jest.fn();
  const { getByText } = rtl.render(
    <Controls closed={false} locked={false} mockToggleOpen={mockToggleOpen} />
  );

  const lockGateBtn = getByText(/lock gate/i);
  expect(lockGateBtn).toBeTruthy();

  fireEvent.click(lockGateBtn);

  expect(mockToggleOpen).not.toHaveBeenCalled();
});
