import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBbia0ZfYSfgnYxx5tWLmW0mZd5r7TtQmI",
  authDomain: "expenser-a88d3.firebaseapp.com",
  databaseURL: "https://expenser-a88d3.firebaseio.com",
  projectId: "expenser-a88d3",
  storageBucket: "expenser-a88d3.appspot.com",
  messagingSenderId: "158575660410"
};

firebase.initializeApp(config);

const database =  firebase.database();

const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val.name + ' is a ' + val.job.title + ' at ' + val.job.company);
  }, (e) => {
      console.log('This failed',e);
    });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }, (e) => {
//       console.log('This faile',e);
//     });
  
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error Fetching Data',e);
// });

// database.ref().set({
//   name: 'Pantelis Tamtakos',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Web Developer',
//     company: 'Topfrost'
//   },
//   location: {
//     city: 'Thessaloniki',
//     country: 'Greece'
//   },
//   atributes: {
//     height: 175,
//     weight: 110
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This faile',e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company':  'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
// .then(()=> {
//   console.log('data was removed');
// }).catch((e) => {
//   console.log('data was not removed');
// });