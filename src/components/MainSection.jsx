import React, { useState, useContext , useEffect } from "react";
import GlobalContext from "../Context/ExpenseContext";

const MainSection = () => {
  const { transactions, saveTransaction, editTransaction , editData } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (editData) {
      setEditId(editData.id);
      setText(editData.text);
      setAmount(editData.amount.toString());
    }
  }, [editData]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      editTransaction(editId, text, amount);
      setEditId(null);
    } else {
      saveTransaction(text, amount);
    }
    setText("");
    setAmount("");
  };

  const handleEdit = (id, currentText, currentAmount) => {
    setEditId(id);
    setText(currentText);
    setAmount(currentAmount.toString());
  };

  const total = transactions.reduce((p, c) => p + c.amount, 0);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);
  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div className="main-section">
      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Name"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />
        <button>{editId !== null ? "Update Transaction" : "Save Transaction"}</button>
      </form>
      <div className="division">
        <div id="current-bal" className="balance">
          <span>
            <p>Current Balance</p>
            <h1>₹{total}</h1>
          </span>
        </div>
        <span className="money-divider">
          <div id="income" className="balance-01">
            <span>
              <p>Current Income</p>
              <h3>₹{income}</h3>
            </span>
          </div>
          <div id="expense" className="balance-01">
            <span>
              <p>Current Expense</p>
              <h3>₹{expense}</h3>
            </span>
          </div>
        </span>
      </div>
   
    </div>
  );
};

export default MainSection;
