// There is an array with the most popular last names, but few elements don’t look like valid last names. 
// Delete invalid elements of the array.
const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]

const firstNames = arr.filter(i => i == i.toUpperCase())
console.log(firstNames)


// альтернативное решение:

// const arrFirstNames = [];
// for (i of arr){
//     if (i == i.toUpperCase())
//     arrFirstNames.push(i)

// }
// console.log(arrFirstNames)

