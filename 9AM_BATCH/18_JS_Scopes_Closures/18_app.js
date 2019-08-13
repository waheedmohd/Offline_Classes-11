// Block Scoping
let a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
            {
                let a = 50;
                console.log(a);
            }
        }
    }
}

// Function scoping
let course = 'Engineering';
let allocateDept = () => {
    if(course === 'Engineering'){
        let dept = 'Software';
    }
};
allocateDept();
console.log(course);

// Nested Functions
let x = 10;
let outerFn = () => {
    let x = 20;
    let innerFn = () => {
        let x = 30;
        console.log(x);
    };
    innerFn();
};
outerFn();









