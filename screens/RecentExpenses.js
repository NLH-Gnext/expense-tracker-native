import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
