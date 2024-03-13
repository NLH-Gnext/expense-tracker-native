import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expense-context";

import IconButton from "../components/UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "p encil",
        amount: 11.99,
        date: new Date("2024-03-7"),
      });
    } else {
      expenseCtx.addExpense({
        description: "pen",
        amount: 21.99,
        date: new Date("2024-03-7"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
