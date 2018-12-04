// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() { 
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then(function(value) { 
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);




var promise1 = new Promise(function(resolve, reject) {
    resolve('foo');
});

promise1.then(function(value) { 
  console.log(value);
});

console.log(promise1);