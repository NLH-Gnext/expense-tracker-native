import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://expense-tracker-native-5f1dc-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );
};
