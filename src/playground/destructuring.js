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

const book = {
  title: 'Ego is the Enemy',
  authos: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Selg-Published'} = book.publisher;

console.log (publisherName);