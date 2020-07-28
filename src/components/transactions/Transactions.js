import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function Transactions(props) {
  const { transactions } = props;

  return (
    <>
      <Table className="table" borderless>
        <tbody>
          {transactions &&
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.yearMonth}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.value}</td>
                <td>
                  <a
                    href={"./edit/" + transaction._id}
                    className="text-secondary"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
