import { View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = () => {
  return (
    <View>
      <ExpensesList />
      <ExpensesSummary />
    </View>
  );
};

export default ExpensesOutput;
