import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { TestScheduler } from "jest";

test("Should correctly render test ExpensesSummary with one expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});
test("Should correctly render test ExpensesSummary with multiple expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={23423552342} />
  );
  expect(wrapper).toMatchSnapshot();
});
