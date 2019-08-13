// Normal Function
function reverseStringOne(str) {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
console.log(reverseStringOne('Good Morning'));

// Function Expression
let reverseStringTwo = function(str) {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseStringTwo('Good Morning'));

// Arrow Function
let reverseStringThree = (str) => {
    let tempStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseStringThree('Good Morning'));