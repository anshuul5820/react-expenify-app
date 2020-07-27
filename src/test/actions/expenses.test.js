import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import { TestScheduler } from "jest";

test("should setup removeExpense action object", () => {
  const action = removeExpense({ id: "abc123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "abc123" });
});

test("should test edit expense action object", () => {
  const action = editExpense({
    id: "abc123",
    updates: { notes: "your new note" },
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { note: "your new note" },
  });
});

test("should test add expense action object", () => {
  const expenseData = {
    desctiption: "rent",
    amount: 100,
    createdAt: 1000000000,
    note: "rent note",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});
test("should test add expense action object with defaut values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      desctiption: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});
