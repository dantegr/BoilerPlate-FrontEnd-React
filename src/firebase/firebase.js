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

database.ref('expenses').push({
  description: 'video game',
  note: 'col',
  amount: 120,
  createdAt: 40000
});

database.ref('expenses').push({
  description: 'video game',
  note: 'col',
  amount: 100,
  createdAt: 50000
});


database.ref('expenses').push({
  description: 'video game',
  note: 'col',
  amount: 200,
  createdAt: 70000
});


// database.ref('notes').push({
//   title: 'course topics',
//   body: 'node python angular'
// })

// database.ref('notes/-Lbrv8Tm7qxXYrXTrQXs').remove();
