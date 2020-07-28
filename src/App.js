import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Header from "./components/header/Header";
import Period from "./components/period/Period";
import Status from "./components/status/Status";
import transactionService from "./services/TransactionService";
import CategorySumary from "./components/categories/CategorySumary";
import AddTranscation from "./components/transactions/addTranscation";

export default function App() {
  const [periods, setPeriod] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState("2019-05");
  const [categorySumary, setCategorySumary] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [transactionsFiltered, setTransactionsFiltered] = useState([]);
  const [totalReceita, setTotalReceita] = useState(0);
  const [totalDespesa, setTotalDespesa] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [textFilter, setTextFilter] = useState("");

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
        setTransactionsFiltered(transactions);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentPeriod]);

  useEffect(() => {
    const { income, outcome } = transactionsFiltered.reduce(
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
    setTotalReceita(income);
    setTotalDespesa(outcome);
    setSaldo(income - outcome);
  }, [transactionsFiltered]);

  const handleChangePeriod = (currentPeriod) => {
    setCurrentPeriod(currentPeriod);
  };
  const handChangeFilter = (event) => {
    setTextFilter(event.target.value);
    const transactionFilter = transactions.filter((transaction) => {
      return transaction.category
        .toLowerCase()
        .includes(textFilter.toLowerCase());
    });
    //console.log(transactionFilter);
    setTransactionsFiltered(transactionFilter);
  };

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <Header />
          <Period onChangePeriod={handleChangePeriod} periods={periods} />
        </div>
        <Status
          totalReceita={totalReceita}
          totalDespesa={totalDespesa}
          saldo={saldo}
        />
        <div id="headerTransaction" className="flex-row">
          <Router>
            <div>
              <nav className="navbar navbar-expand navbar-dark ">
                <div className="navbar-nav mr-auto">
                  <li className="nav-item  bg-dark">
                    <Link to={"/add"} className="nav-link">
                      Nova Transação
                    </Link>
                  </li>
                </div>
                <FormControl
                  type="text"
                  id="filter"
                  placeholder="Filtro"
                  onChange={handChangeFilter}
                />
              </nav>
              <div className="container mt-3">
                <Switch>
                  <Route path="/add" component={AddTranscation} />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
        <CategorySumary categories={categorySumary} />
        {/* <Transactions transactions={transactionsFiltered} /> */}
      </div>
    </>
  );
}
