import selectExpensestotal from "../../selectors/expenses-total";
import expenses from "..fixtures/expenses";

test("Should return 0 if no epenses", () => {
    const res = selectExpensestotal([]);
    expect(res).toBe(0);
});

test("should correctly add up a single expenses", () => {
    const res = selectExpensestotal([expenses[0]]);
    expect(res).toBe(195);
});
