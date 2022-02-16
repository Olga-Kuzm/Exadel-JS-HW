for (a = 1; a <= 100; a++){
    if (a % 5 == 0 && a % 3 ==0){
        console.log("The number", a, "is evenly divisible by 3 and 5.")
    }
    else if(a % 3 == 0){
        console.log(a, ' - number is divisible by 3')
    }
    else if (a % 5 == 0){
        console.log(a, ' - number is divisible by 5.')
    }
    else{
        console.log (a)
    }
}