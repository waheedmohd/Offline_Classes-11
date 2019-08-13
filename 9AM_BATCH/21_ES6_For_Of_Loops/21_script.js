// Looping an array
// Normal for - loop
let colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
let result = '';
for(let i=0 ; i < colors.length ; i++){
    result += `${colors[i]} `;
}
console.log(result);

// for-in Loop ES5
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// for - of loop ES6
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

// forEach function ES5
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// forEach with Arrow function  ES6
colors = ['WHITE', 'BLACK' , 'BLUE' , 'GRAY' , 'ORANGE' , 'PURPLE' , 'YELLOW'];
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);
