//PROMISE
// It is use for solution of call back hell

//there are three states of promise

//1. Pending: neither fulfilled nor rejected.
//2. Fulfilled: Successful operation, with a value attached.
//3. Rejected: Failed operation, with a reason (error) attached.

// syntax:let promise = new Promise( (resolve, reject) => { .... })

// Here is a simple example of promise
let quizTest = new Promise((resolve, reject) => {
  resolve("You have passed the quiz");
});

//when promise is fulfilled or resolved we use .then with promise
// syntax:Promise.then(()=>{}):

quizTest.then((result) => {
  console.log("successfully", result);
});
let quizTest1 = new Promise((resolve, reject) => {
  reject("You have not passed the quiz");
});

// when the promise is  failed or rejected we use .catch with promise
//syntax:Promise.catch(()=>{})

quizTest1.catch((err) => {
  console.log(err);
});

//asyncawait
//An async function returns a Promise.
let studentinfo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("All papers are cleared");
  }, 3000);
});
//The async keyword is used to define an asynchronous function.

//The await keyword is used to pause the execution of an async function until a Promise is resolved or rejected.
async function studentresult() {
  let information = await studentinfo;
  console.log(information);
}
studentresult();
