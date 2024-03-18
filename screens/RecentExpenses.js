import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpense();
      expenseCtx.setExpenses(expenses);
    };
    getExpenses();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
