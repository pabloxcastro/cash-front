function formatNumber(value) {
  return Intl.NumberFormat("pt-BR", {
    style: "decimal",
    currency: "BRL",
  }).format(value);
}

function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace(".", ",") + "%";
}

export { formatNumber, formatPercentage };
