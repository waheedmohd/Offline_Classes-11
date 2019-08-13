// var vs let
let course = 'Engineering';
if(course === 'Engineering'){
    var dept1 = 'Software';
    let dept2 = 'Hardware';
}
console.log(dept1); // software
//console.log(dept2); // ReferenceError: dept2 is not defined

// let vs const
const month = 'August';
// month = 'September'; // Assignment to constant variable
console.log(month);

// Object with const
const mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000
};
mobile.price = 45000;
console.log(mobile);

// functions with const
const greet = (name) => {
    let message = `Good Morning ${name}`;
    return message;
};
const output = greet('John');
console.log(output);
