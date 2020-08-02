import React, { useState, useEffect } from "react";
import {
  Container,
  Category,
  Balance,
  CurrentCategory,
  TitleCategory,
} from "./styles";
import { formatNumber } from "../../helpers/formatHelpers";

export default function CategorySumary(props) {
  const { categories, transactions, balance } = props;

  const [transactionsCategory, setTransactionCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  const setActiveCategory = (category) => {
    setCurrentCategory(category);
  };

  const setDesactiveCategory = () => {
    setCurrentCategory("");
  };

  useEffect(() => {
    const transactionsFiltered = transactions.filter((transaction) => {
      return transaction.category.includes(currentCategory);
    });
    setTransactionCategory(transactionsFiltered);
  }, [currentCategory, transactions]);

  return (
    <>
      <Container>
        <tbody>
          {!currentCategory &&
            categories &&
            categories.map((category, index) => (
              <Category
                key={index}
                onClick={() => setActiveCategory(category._id)}
              >
                <td>{category._id}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(category.soma)}</td>
              </Category>
            ))}
          {!currentCategory &&
            balance &&
            balance.map((balance, index) => (
              <Balance key={index}>
                <td>{balance.description}</td>
                <td className="value">R$</td>
                <td className="value">{formatNumber(balance.value)}</td>
              </Balance>
            ))}
          {currentCategory && (
            <CurrentCategory>
              <td colSpan="4" onClick={setDesactiveCategory}>
                <TitleCategory>{currentCategory}</TitleCategory>
              </td>
            </CurrentCategory>
          )}
          {currentCategory &&
            transactionsCategory &&
            transactionsCategory.map((transaction, index) => (
              <Category key={index}>
                <td>{transaction.yearMonth}</td>
                <td>{transaction.description}</td>
                <td className="value">{transaction.value}</td>
                <td>
                  <a
                    href={"./edit/" + transaction._id}
                    className="text-secondary"
                  >
                    Edit
                  </a>
                </td>
              </Category>
            ))}
        </tbody>
      </Container>
    </>
  );
}
