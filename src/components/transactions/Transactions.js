import React from "react";

export default function Transactions(props) {
  const { transactions } = props;

  return (
    <>
      <table className="table">
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
      </table>
    </>
  );
}
