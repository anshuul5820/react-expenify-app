import filtersReducer from "../../reducers/filters";
import moment from "moment";
test("SHould setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toBe();
});

test("should set sortBYy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("SHould set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set textfilter", () => {
  const text = "this is the filter";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate filter", () => {
  const startDate = moment();
  const action = { type: "SET_END_DATE", endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
