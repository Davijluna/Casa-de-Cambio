const fetchCurrency = async (currency) => {
  const url = `https://api.exchangerate.host/latest?base=${currency}`;
  const result = await fetch(url)
  const data = await result.json();
  handleRates(data);
  renderBase(data)
}

// para não precisar chamar a função a toda hora.
window.onload = () => {
  // fetchCurrency();
  setupHandlers();
}