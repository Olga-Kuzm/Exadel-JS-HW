const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

let sum = 0;
for (i = 0; i < prices.length; i ++ ) {
sum += prices[i]
};
let average = sum / prices.length;

console.log("Total - ", sum, 'hryvnias, average price of goods - ', average, ' hryvnias')
