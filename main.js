"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//PROMISSES
let quizTest = new Promise((resolve, reject) => {
    resolve("You have passed the quiz");
});
quizTest.then((result) => {
    console.log("successfully", result);
});
let quizTest1 = new Promise((resolve, reject) => {
    reject("You have not passed the quiz");
});
quizTest1.catch((err) => {
    console.log(err);
});
// CHAINING IN PROMISSES
function asyncresult1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting result 1");
            resolve("result1");
        }, 2000);
    });
}
function asyncresult2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getting result 2");
            resolve("result 2");
        }, 2000);
    });
}
let Result1 = asyncresult1();
Result1.then((res) => {
    console.log(res);
    let Result2 = asyncresult2();
    Result2.then((res) => {
        console.log(res);
    });
});
//asyncawait
let studentinfo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("All papers are cleared");
    }, 3000);
});
async function studentresult() {
    let information = await studentinfo;
    console.log(information);
}
studentresult();
