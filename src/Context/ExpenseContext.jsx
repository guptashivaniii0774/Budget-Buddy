import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [editData, setEditData] = useState();

  // Delete Transaction
  const deleteItem = (id) =>
    setTransactions(transactions.filter((transaction) => transaction.id !== id));

  // Save Transaction
  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: +amount,
    };
    setTransactions([newTransaction, ...transactions]);
  };

  // Edit Transaction
  const editTransaction = (id, newText, newAmount) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id
        ? { ...transaction, text: newText, amount: +newAmount }
        : transaction
    );
    setTransactions(updatedTransactions);
  };

  // Set data for editing
  const setEditDataForTransaction = (id, text, amount) => {
    setEditData({ id, text, amount });
  };

  // Clear All
  const clearAll = () => {
    setTransactions([]);
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        deleteItem,
        saveTransaction,
        editTransaction,
        clearAll,
        editData,
        setEditDataForTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
