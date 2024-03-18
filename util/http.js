import axios from "axios";

const BaseUrl =
  "https://expense-tracker-native-5f1dc-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(BaseUrl + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpense = async () => {
  const response = await axios.get(BaseUrl + "/expenses.json");
  const expenses = [];

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

export const updateExpense = (id, expenseData) => {
  return axios.put(BaseUrl + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(BaseUrl + `/expenses/${id}.json`);
};
