//-> Real life Promise

// Promise -> Pending
// Pending -> Successful => Promise fulfilled
//            or Failure

//-> JavaScript Promise

// Promise -> Will do Async Operation for us (Initial State: Pending)
// Pending -> Successful => Resolved / Fulfilled
//            or Failure => Rejected

//-> Implementation of Promise in JavaScript

// using the Promise Class we can create a new promise
// Promise class accepts a callback function which have two parameters which are also two callback function. The first one is called when the promise is seccessful and second one is called when the promise is failed.
// When we store the object created by the Promise class in a variable then we will get all the information of that Promise class in that variable. That becomes a promise object.

const p = new Promise((resolve, reject) => {
   // Async operation will be performed here and then the result will be passed from here
   // if the result is a success then it will be passed as resolved else rejected
   // for success the "resolved" function will be called here or for failure "reject" function will be called here

   // resolve("The promise is successful");
   reject("The promise is failed");
});

console.log(p);

p.then((result) => {
   // this is actually the resolve function called inside the callback function of the promise previously. So the "result" is actually what was passed in the "resolve" function when called
   console.log({ result });
}).catch((err) => console.log({ from_promise_p: { err } }));

const longChaining = new Promise((res, rej) => {
   res("I am resolved on will");
});

longChaining
   .then((text) => {
      console.log({ from_promise_longChaining: { text } });
      return 100;
   })
   .then((number) => {
      console.log({ from_promise_longChaining: { number_100: number } });
      return 100 * 3;
   })
   .then((num) => {
      console.log({ from_promise_longChaining: { number_300: num } });
   })
   .catch((err) => console.log(err));

// Instead of chaining with "then" method we can use "async await" format.
