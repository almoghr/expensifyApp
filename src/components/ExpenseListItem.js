import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  console.log(moment(createdAt).format("MMMM Do, YYYY"));
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} ₪ - {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

export default ExpenseListItem;
