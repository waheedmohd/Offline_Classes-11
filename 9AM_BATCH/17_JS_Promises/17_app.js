// Promises with callback functions
let cleanLaptop = (success,failure) => {
    // doing Logic
    let isDone = true;
    if(isDone){
        success('Cleaning is Done');
    }
    else{
        failure('Cleaning is NOT Done');
    }
};

cleanLaptop((message) => {
    console.log(message);
},(message) => {
    console.log(message);
});

// Actual Promises in JavaScript
let doTask = new Promise((resolve, reject) => {
    // doing the task
    let isDone = true;
    if(isDone){
        resolve('Task is Done');
    }
    else{
        reject('Task is NOT Done');
    }
});
doTask.then((message) => {
    console.log('Iam from then ' + message);
}).catch((message) => {
    console.log('Iam from catch ' +message)
});

// Dependent Promises
let doProject = new Promise((resolve, reject) => {
    // doing a project
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing a TechnicalRound
    let isDone = true;
    if(isDone){
        resolve('Technical Round is Finished');
    }
    else{
        reject('Technical Round is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing a doManagerRound
    let isDone = true;
    if(isDone){
        resolve('Manager Round is Finished');
    }
    else{
        reject('Manager Round is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing a HR Round
    let isDone = true;
    if(isDone){
        resolve('HR Round is Finished and got JOB');
    }
    else{
        reject('HR Round is NOT Finished');
    }
});

// call the dependent promises
doProject.then((message) => {
    let result = `${message} => `;
    doTechnicalRound.then((message) => {
        result += `${message} => `;
        doManagerRound.then((message) => {
            result += `${message} => `;
            doHRRound.then((message) => {
                result += `${message}`;
                console.log(result);
            }).catch((message) => {
                console.error(message);
            });
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error(message);
});

