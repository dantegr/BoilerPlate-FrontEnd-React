// const person = {
//   name: 'Pantelis',
//   age: 31,
//   location: {
//     city: 'Thessaloniki',
//     temp: 17
//   }
// };

// const {name, age} = person;

// console.log(`${name} is ${person.age}.`);


// const {city, temp} = person.location;
// if (city && temp) {
//   console.log(`Its ${temp}C in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   authos: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Selg-Published'} = book.publisher;

// console.log (publisherName);

// const address = ['1299 s juniper street','Philadelphia','Pennsylvania','19147'];

// const [,city , state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffee,, medium = 'New York'] = item;


console.log(`A medium ${coffee} costs ${medium}`);