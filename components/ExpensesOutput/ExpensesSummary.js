import { Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const SumOfExpenses = expenses.reduce(
    (sum, expenses) => sum + expenses.amount,
    0
  );
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{SumOfExpenses}</Text>
    </View>
  );
};

export default ExpensesSummary;
