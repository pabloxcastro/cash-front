import React from "react";

function status(props) {
  const { totalReceita, totalDespesa, saldo } = props;

  return (
    <div id="statusContainer" className="flex-row">
      <div>{`Receitas: R$ ${totalReceita}`}</div>
      <div className="status">{`Despesas: R$ ${totalDespesa}`}</div>
      <div className="status">{`Saldo: R$ ${saldo}`}</div>
    </div>
  );
}

export default status;
