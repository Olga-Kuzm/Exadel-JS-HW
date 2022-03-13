/*Create a currency converter using an exchange rate from https://currencyapi.com/. A user should be able to pass a currency and amount of money in a function and get the amount of money in the desired currency in output. Use “then” syntax to implement the function.

currencyConvertor(40, EUR) ⇒ 35 EUR*/

function currencyConvertor(amount, currency){
  const url = 'https://api.currencyapi.com/v3/latest?apikey=bfFzIseYrt0epC7Eyi9NtP0UI8zyXxY6GiXlebet'
  let res
  fetch(url)
    .then((response) => {
      return response.json();
  })
    .then((data) => {
      res = data.data      
      const val = res[currency].value
      const convert = (amount * val).toFixed(2)
      return console.log('result -', convert, currency)
    
  });


}


  
currencyConvertor(40, "EUR")


