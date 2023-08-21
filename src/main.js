
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
  clearRatesList();
  const currencyInput = document.querySelector('#currency-input');
  fetchCurrency(currencyInput.value);
  renderBase(currencyInput.value)
}

const setupHandlers = () => {
  const serchbtn = document.querySelector('#btn-pesquisar')
  serchbtn.addEventListener('click', handleSearchEvent)
}

const clearRatesList = () => {
  const list = document.querySelector('#currency-list');
  list.innerHTML = '';
}

const renderBase = ({base}) => {
  const baseH2 = document.querySelector('#base')
  baseH2.innerText = `Valores referentes a 1 ${base}`
}
