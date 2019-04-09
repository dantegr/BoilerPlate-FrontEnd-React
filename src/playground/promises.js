const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Pantelis',
      age: 32
    });
    reject('something went worng');
  }, 1500);
  
});

console.log('before');

promise.then((data)=> {
  console.log('1',data)}).then(() => {
    console.log('does this run?');  
}).catch((error)=> {
  console.log('error',error);
});


console.log('after');