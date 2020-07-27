import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";
import moment from "moment";

test("Should generate setStartDate action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ type: "SET_START_DATE", startDate: moment(0) });
});
test("Should generate setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});
test("Should generate setTextfilter action object", () => {
  const text = "Something";
  const action = setTextFilter(text);
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: text });
});
test("Should generate default setTextFilter action object", () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: "SET_TEXT_FILTER", text: "" });
});
test("Should generate sortByAmount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});
test("Should generate setEndDate action object", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

