const handleRates = ({rates}) => {
  const ratesEntries = Object.entries(rates)
  ratesEntries.forEach(([currency, rates]) => {
    console.log(`${currency}:  ${rates}`)
  });
}