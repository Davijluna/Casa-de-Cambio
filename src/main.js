
const handleRates = ({rates}) => {
  const ratesEntries = Object.entries(rates)
  ratesEntries.forEach(([currency, rates]) => {
    const list = document.querySelector('#currency-list')
    const li = document.createElement('li')
    li.innerHTML = `${currency}: ${rates}`;
    list.appendChild(li)
    
  });
}