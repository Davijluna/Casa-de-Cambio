
const renderRates = (currency, rates) => {
  const list = document.querySelector('#currency-list')
  const li = document.createElement('li')
  li.innerHTML = `${currency}: ${rates}`;
  list.appendChild(li)
}

const handleRates = ({rates}) => {
  const ratesEntries = Object.entries(rates)
  ratesEntries.forEach(([currency, rates]) => {
    renderRates(currency, rates);
  });
}

const handleSearchEvent = () => {
  const currencyInput = document.querySelector('#currency-input');
  fetchCurrency(currencyInput.value);
}

const setupHandlers = () => {
  const serchbtn = document.querySelector('#btn-pesquisar')
  serchbtn.addEventListener('click', handleSearchEvent)
}
