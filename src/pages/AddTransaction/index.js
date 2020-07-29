import React, { useState } from "react";
import { Link } from "react-router-dom";
import transactionService from "../../services/TransactionService";

export default function AddTransaction() {
  const initialTransactionState = {
    id: null,
    description: "",
    category: "",
    type: "",
    value: "",
    yearMonthDay: "",
  };
  const [transaction, setTransaction] = useState(initialTransactionState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTransaction({ ...transaction, [name]: value });
    //console.log({ transaction });
  };

  const saveTransaction = () => {
    var data = {
      description: transaction.description,
      value: transaction.value,
      category: transaction.category,
      yearMonthDay: transaction.yearMonthDay,
      type: transaction.type,
    };

    transactionService
      .create(data)
      .then((response) => {
        setTransaction({
          id: response.data.id,
          description: response.data.description,
          value: response.data.value,
          category: response.data.category,
          yearMonthDay: response.data.yearMonthDay,
          type: response.data.type,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTransaction = () => {
    setTransaction(initialTransactionState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <div id="headerTransaction" className="flex-row">
            <button className="btn btn-dark" onClick={newTransaction}>
              Add
            </button>
            <Link to={"/"} className="btn btn-dark">
              Voltar
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <input
              type="radio"
              id="receita"
              name="type"
              value="+"
              onChange={handleInputChange}
            />
            <label htmlFor="receita">Receita</label>
            <input
              type="radio"
              id="despesa"
              name="type"
              value="-"
              onChange={handleInputChange}
            />
            <label htmlFor="despesa">Despesa</label>
          </div>
          <div className="form-group">
            <label htmlFor="yearMonthDay">Data</label>
            <input
              type="text"
              className="form-control"
              id="yearMonthDay"
              required
              value={transaction.yearMonthDay}
              onChange={handleInputChange}
              name="yearMonthDay"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={transaction.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <input
              type="text"
              className="form-control"
              id="category"
              required
              value={transaction.category}
              onChange={handleInputChange}
              name="category"
            />
          </div>
          <div className="form-group">
            <label htmlFor="value">Valor</label>
            <input
              type="Number"
              className="form-control"
              id="value"
              required
              value={transaction.value}
              onChange={handleInputChange}
              name="value"
            />
          </div>
          <div id="buttonBar">
            <Link to={"/"} className="btn btn-dark">
              Cancelar
            </Link>
            <button onClick={saveTransaction} className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
