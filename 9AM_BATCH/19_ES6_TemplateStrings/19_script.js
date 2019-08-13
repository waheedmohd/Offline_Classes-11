let employees = [
    {
        id : 100,
        name : 'John',
        age : 35,
        designation : 'Manager',
        active : true
    },
    {
        id : 101,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : false
    },
    {
        id : 102,
        name : 'Laura',
        age : 23,
        designation : 'Software Engineer',
        active : true
    },
    {
        id : 103,
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        active : false
    },
    {
        id : 104,
        name : 'David',
        age : 60,
        designation : 'CTO',
        active : true
    }
];

// String Concatenation
let stringContact = '';
for(let employee of employees){
    stringContact += "<tr>" +
                        "<td>" + employee.id + "</td>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.age + "</td>" +
                        "<td>" + employee.designation + "</td>" +
                        "<td>" + employee.active + "</td>" +
                     "</tr> \n";
}
// document.querySelector('#table-body').innerHTML = stringContact;

// Template String
let templateString = ``;
for(let employee of employees){
    templateString += `<tr>
                         <td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.age}</td>
                         <td>${employee.designation}</td>
                         <td>${employee.active}</td>
                       </tr>`;
}
document.querySelector('#table-body').innerHTML = templateString;

// ES6 Feature => default parameter
let greet = (name , age=20) => {
    console.log(`Hello ${name} You are ${age} yrs Old!`);
};
greet('John' , 40);







