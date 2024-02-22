import React from "react";
import { FlatList, Text } from "react-native";

const renderExpenseItem = (itemData) => {
  return <Text>{itemData.item.description}</Text>;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
