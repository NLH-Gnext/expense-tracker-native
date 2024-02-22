import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({ expenses, periodName }) => {
  const SumOfExpenses = expenses.reduce(
    (sum, expenses) => sum + expenses.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${SumOfExpenses.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
