/* There is a function which counts all vowels in a given string, but for some reason 
I don’t work as expected. Find out the problem and fix it.*/

const vovelsCounter = (str) => {
    	    const vovels = ['a', 'e', 'i', 'o', 'u', 'y']
    	    let counter = 0
    	    for(letter of str){
             if(vovels.includes(letter)){
                 counter = counter + 1
        	  }
    	    }
    	    return console.log(counter)
}

vovelsCounter('The current directory is AD-123')
// expected output → 8
// actual output → 7
