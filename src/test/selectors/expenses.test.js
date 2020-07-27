import selectExpenses from "../../selectors/expenses";
import moment from "moment";
const expenses = [
  {
    id: "1",
    description: "chappal",
    amount: "100",
    createdAt: 0,
    note: "",
  },
  {
    id: "2",
    description: "joota",
    amount: "200",
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "",
  },
  {
    id: "3",
    description: "balu",
    amount: "300",
    createdAt: moment(0).subtract(4, "days").valueOf(),
    note: "",
  },
];
test("should filter text by value provided", () => {
  const filters = {
    text: "l",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days").valueOf(),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
