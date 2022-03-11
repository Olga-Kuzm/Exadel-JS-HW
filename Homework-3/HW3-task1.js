/*There is a JSON file with a price list. All prices there are in dollars. You need to:
convert all prices to euros (use a static exchange rate).
add a currency field to the source and output objects
save both objects into variables and log them into the console.*/


const fs = require("fs")
const file = fs.readFileSync('task1-data.json');
const dataRaw = JSON.parse(file);
const data = dataRaw.data

const dollarToEuro = 0.91;


let dataEuro = JSON.parse(JSON.stringify(data))


dataEuro.forEach(dataEuro => {
    dataEuro["Prices"]["Price"] = (dataEuro["Prices"]["Price"] * dollarToEuro).toFixed(2)
    dataEuro["Prices"]["Retail Price"] = (dataEuro["Prices"]["Retail Price"] * dollarToEuro).toFixed(2)
    dataEuro["Prices"]["Wholesale Price"] = (dataEuro["Prices"]["Wholesale Price"] * dollarToEuro).toFixed(2)
   
});


dataEuro.unshift({"Dollar to Euro rate" : dollarToEuro})
data.unshift({"Dollar to Euro rate" : dollarToEuro})

console.log("Object with prices in Dollars - ", data)
console.log('--------------------------------------------------------')
console.log("Object with prices in Euro - ", dataEuro)

