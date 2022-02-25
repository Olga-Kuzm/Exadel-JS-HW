// Create a function that checks whether a phone number is valid or not. 
// NOTE: You don’t need to test your function with all possible phone numbers, 
// just check if the function will work correctly with the following inputs.


function validatePhoneNumber (phoneNumber){    
    newPhoneNumber = phoneNumber.replace(/\s/g,"")
    if (newPhoneNumber.match(/^\d+$/) && newPhoneNumber.length === 10 ){
        console.log(true)
    }
    else{
        console.log(false)
    }

}

validatePhoneNumber('067 734 4343') 
validatePhoneNumber('094 643 7432') 
validatePhoneNumber('083 jfvj 4554') 
validatePhoneNumber('Anton0938 884') 
validatePhoneNumber('0437348348') 
