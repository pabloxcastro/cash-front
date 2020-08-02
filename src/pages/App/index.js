import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Period from "../../components/Period";
import transactionService from "../../services/TransactionService";
import CategorySumary from "../../components/CategorySumary";
import { Header } from "./styles";

export default function App() {
  const [periods, setPeriod] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState("2019-01");
  const [categorySumary, setCategorySumary] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    transactionService
      .getPeriods()
      .then((response) => {
        setPeriod(response.data.yearMonth);
      })
      .catch((e) => {
        console.log(e);
      });

    transactionService
      .getCategorySumary(currentPeriod)
      .then((response) => {
        const categories = response.data;
        setCategorySumary(categories);
      })
      .catch((e) => {
        console.log(e);
      });

    transactionService
      .getAllTransactions(currentPeriod)
      .then((response) => {
        const transactions = response.data.transactions;
        setTransactions(transactions);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPeriod]);

  useEffect(() => {
    const { income, outcome } = transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case "+":
            accumulator.income += Number(transaction.value);
            break;
          case "-":
            accumulator.outcome += Number(transaction.value);
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );

    setBalance([
      {
        description: "Receitas",
        value: income,
      },
      {
        description: "Despesas",
        value: outcome,
      },
      {
        description: "Saldo",
        value: income - outcome,
      },
    ]);
  }, [transactions]);

  const handleChangePeriod = (currentPeriod) => {
    setCurrentPeriod(currentPeriod);
  };

  return (
    <>
      <div>
        <Header>
          <Period onChangePeriod={handleChangePeriod} periods={periods} />

          <Link className="btn btn-dark" to={"/add"}>
            +
          </Link>
        </Header>

        <CategorySumary
          categories={categorySumary}
          transactions={transactions}
          balance={balance}
        />
      </div>
    </>
  );
}
