import React from "react";
import Table from "react-bootstrap/Table";
import { formatNumber } from "../../helpers/formatHelpers";

export default function CategorySumary(props) {
  const { categories, balance } = props;

  return (
    <>
      <Table id="categoryHome" className="table" borderless>
        <tbody>
          {categories &&
            categories.map((category, index) => (
              <tr key={index} className="categoryHome">
                <td>{category._id}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(category.soma)}</td>
              </tr>
            ))}
          {balance &&
            balance.map((balance, index) => (
              <tr key={index} className="statusHome">
                <td>{balance.description}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(balance.value)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
