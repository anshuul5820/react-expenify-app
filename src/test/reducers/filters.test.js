import filtersReducer from "../../reducers/filters";

test("SHould setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toBe()
});
