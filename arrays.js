//reverse a string

//ES6
const reverse = str => str.split('').reverse().join('');

alert(reverse('What have you done?'));


function reverse1(str) {
     if (  typeof str != 'string' ){
         return ('not a string');
     }
    return str.split('').reverse().join('');
} 

alert(reverse1('What have you done?'));


function reverse2(str) {
     if ( !str || str.length < 2 || typeof str != 'string'){
         return ('not a string');
     }
     const reversedArray =[];
     const totalItems = str.length-1;
     for (let i= totalItems; i>=0; i--){
         reversedArray.push(str[i]);
     }
     return reversedArray.join('');
 }

 alert(reverse2('What have you done?'));
