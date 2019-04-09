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

export { firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());

// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());

// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());

// });



// database.ref('expenses').push({
//   description: 'video game',
//   note: 'col',
//   amount: 100,
//   createdAt: 50000
// });
