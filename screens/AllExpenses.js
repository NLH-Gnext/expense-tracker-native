import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenseContext } from "../store/expense-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  // console.log(expenseCtx.expenses);
  return <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod="All" />;
};

export default AllExpenses;
