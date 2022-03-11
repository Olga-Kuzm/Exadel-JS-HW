/*Extend build-in class string with a method called removeSpecialCharacters. This method should work for every string created within your js file. 
For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’*/



    
String.prototype.removeSpecialCHaracters = function() {

    return this.replace(/[^a-zа-яё0-9\s]/gi, '');
  
  }


console.log('HE!!&^%^##LL??OO'.removeSpecialCHaracters())
