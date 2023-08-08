const fetchCurrency = async () => {
  const url = 'https://api.exchangerate.host/latest';
  const result = await fetch(url)
  const data = await result.json();
  handleRates(data);
}

// para não precisar chamar a função a toda hora.
window.onload = () => {
  fetchCurrency();
}