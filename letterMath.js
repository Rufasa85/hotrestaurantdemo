const letterMath = (...letters)=> !letters.length? "z" :'zabcdefghijklmnopqrstuvwxy'.split('')[letters.reduce((total,letter)=>'zabcdefghijklmnopqrstuvwxy'.split('').indexOf(letter) + total,0)%26]


console.log(letterMath('a','b')) //should be c;
console.log(letterMath("b","d") ) //should be f;
console.log(letterMath("a","b","c") ) //should be f;
console.log(letterMath("y","b","a") ) //should be b;
