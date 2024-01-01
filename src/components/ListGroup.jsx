import React, { useContext, useState } from "react";
import ListItem from "./ListItem";
import GlobalContext from "../Context/ExpenseContext";
import budgetImg from '../assets/Budget.svg'

const ListGroup = () => {
  const { transactions } = useContext(GlobalContext);
  const [filterType, setFilterType] = useState("all");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterType === "all") {
      return true;
    } else if (filterType === "income") {
      return transaction.amount > 0;
    } else if (filterType === "expense") {
      return transaction.amount < 0;
    }
    return false;
  });

  return (
<div className="transections">

      {filteredTransactions.length === 0 ? (
      <div div className="box">
       <img src={budgetImg} alt="" width={'300px'} />
       <h1>Add transactions </h1></div>
      ) : (
        <>
      <div className="filter">
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
        <ul className="list-group">
          {filteredTransactions.map((transaction) => (
            <ListItem key={transaction.id} transaction={transaction} />
          ))    }
        </ul>
        </>
      )}
   
</div>
  );
};

export default ListGroup;
