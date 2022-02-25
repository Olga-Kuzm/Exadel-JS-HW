 
/*Implement a function called pinCodeGenerator. 
This function should take one argument called length and return a randomly generated pin code of a 
given length.*/ 

const pinCodeGenerator = (lenght) => {
    let pin = ''
    for (i = 0; i < lenght; i ++){
        randInt = Math.floor(Math.random() * 10)
        pin = pin.concat(randInt)        
    }
    if (pin[0] === '0'){
        numWithoutZero = Math.floor(Math.random() * 9) + 1
        pin[0] = pin.replace(pin[0], numWithoutZero)
    }    
    pin = Number(pin)
    return console.log(pin)
};

pinCodeGenerator (4)

// альтернативное решение:

// const pinCodeGenerator = (len) => {
//     let pin = []
//     for (i = 0; i < len; i++){
//         randInt = Math.floor(Math.random() * 10)
//         pin.push(randInt)
//     }    
//     pin = pin.join('')
//    return console.log(Number(pin))    
// }    

// pinCodeGenerator(5)