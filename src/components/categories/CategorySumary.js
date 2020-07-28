import React from "react";
import Table from "react-bootstrap/Table";

export default function CategorySumary(props) {
  const { categories } = props;

  return (
    <>
      <Table className="table" borderless>
        <tbody>
          {categories &&
            categories.map((category, index) => (
              <tr key={index}>
                <td>{category._id}</td>
                <td>{category.soma}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
