/*Given an array of objects. Every object is an identity card of a person. We need to keep only unique values in this array. Implement a function that will do this work.
*/

const fs = require('fs')
const dataRaw = fs.readFileSync('task2-data.json')
const data = JSON.parse(dataRaw)


function unique(arr){
    result = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse)
    return result;
} 
console.log(unique(data))