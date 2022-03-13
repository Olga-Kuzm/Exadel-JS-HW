

async function currencyConvertor(amount, currency){
    const url = 'https://api.currencyapi.com/v3/latest?apikey=bfFzIseYrt0epC7Eyi9NtP0UI8zyXxY6GiXlebet'
    const fetchedData = await fetch(url)
    const result = await fetchedData.json()
    const val = result.data[currency].value
    const convert = (amount * val).toFixed(2)
    return console.log('result -', convert, currency)}
    


currencyConvertor(40, 'RUB')

