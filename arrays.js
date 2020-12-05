//reverse a string

//ES6
// const reverse = str => str.split('').reverse().join('');

// alert(reverse('What have you done?'));


function reverse1(str) {
    if ( str.length < 2 ){
        return ('not a string');
    }
    return str.split('').reverse().join('');
} 

alert(reverse1(undefined));

