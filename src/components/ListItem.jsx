import React, { useContext, useState } from "react";
import { FaTrash, FaPenFancy } from "react-icons/fa";
import GlobalContext from "../Context/ExpenseContext";

const ListItem = ({ transaction }) => {
  const { deleteItem, setEditDataForTransaction } = useContext(GlobalContext);

  const handleEdit = () => {
    setEditDataForTransaction(transaction.id, transaction.text, transaction.amount);
  };



  return (
    <li className="list-item">

          <h5 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>
            ₹{transaction.amount}
          </h5>
          <h4>{transaction.text}</h4>
          <span className="btn-span">
            <button className="delbtn" onClick={() => deleteItem(transaction.id)}>
              <FaTrash />
            </button>
            <button className="editbtn" onClick={handleEdit}>
              <FaPenFancy />
            </button>
          </span>

    </li>
  );
};

export default ListItem;
