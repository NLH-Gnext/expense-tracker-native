import axios from "axios";

const BaseUrl =
  "https://expense-tracker-native-5f1dc-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = (expenseData) => {
  axios.post(BaseUrl + "/expenses.json", expenseData);
};

export const fetchExpense = async () => {
  const response = await axios.get(BaseUrl + "/expenses.json");
  const expenses = [];

  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
