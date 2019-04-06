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

database.ref().set({
  name: 'Pantelis Tamtakos',
  age: 26,
  isSingle: false,
  location: {
    city: 'Thessaloniki',
    country: 'Greece'
  },
  atributes: {
    height: 175,
    weight: 110
  }
});

database.ref('age').set(32);

database.ref('location/city').set('Pylaia');