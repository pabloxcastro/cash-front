import React from "react";
import { Container, Category, Balance } from "./styles";
import { formatNumber } from "../../helpers/formatHelpers";

export default function CategorySumary(props) {
  const { categories, balance } = props;

  return (
    <>
      <Container>
        <tbody>
          {categories &&
            categories.map((category, index) => (
              <Category key={index}>
                <td>{category._id}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(category.soma)}</td>
              </Category>
            ))}
          {balance &&
            balance.map((balance, index) => (
              <Balance key={index}>
                <td>{balance.description}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(balance.value)}</td>
              </Balance>
            ))}
        </tbody>
      </Container>
    </>
  );
}
