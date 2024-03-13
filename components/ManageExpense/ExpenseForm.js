import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [inputValue, setInputValue] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValue((currInputValue) => {
      return {
        ...currInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputRows}>
        <Input
          label="Amount"
          style={styles.rowsInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValue.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowsInput}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValue.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValue.description,
          // autoCorrect: false,
          // autoCapitalize: "none",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRows: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowsInput: {
    flex: 1,
  },
});
