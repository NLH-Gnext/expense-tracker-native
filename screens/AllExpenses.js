import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="All"
      fallbackText="No registered expenses found"
    />
  );
};

export default AllExpenses;
