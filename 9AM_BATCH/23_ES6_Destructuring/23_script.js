// Destructuring
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania Medical College',
    address : {
        street : 'Jubliee Hills',
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

//Destructuring ES6
let {name , age , course , college } = student;

// Print Student Data
console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}
             COLLEGE : ${college}`);

// Print the address of student
let {street , city , state , country} = student.address;

console.log(`STREET :  ${street}
             CITY : ${city}
             STATE : ${state}
             COUNTRY : ${country}`);