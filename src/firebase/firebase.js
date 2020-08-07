import * as firebase from "firebase";
//takes all named expoerts from firebase & dumps them in firebase var
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOTRAGE_BUCKEY,
  messagingSenderId: process.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  // measurementId: ,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };
// database
//   .ref("expenses")
//   .push({ escription: "chai", note: "", amount: 30000, createdAt: 300000 });

// database.ref("expenses").push({
//   escription: "coffee",
//   note: "wefwkb",
//   amount: 50000,
//   createdAt: 320000,
// });
// database
//   .ref("expenses")
//   .push({ escription: "gazar", note: "", amount: 20000, createdAt: 3244000 });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }); //pre-defined event listener; gets called when any child gets deleted

// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }); //child_added gets called for existing data as well as new ones

// // database
// //   .ref()
// //   .set({
// //     name: "Ansul",
// //     age: "18",
// //     stresslevel: 6,
// //     job: {
// //       title: "Software dev",
// //       company: "Google",
// //     },
// //     isSingle: "false",
// //     location: { country: "India", state: "Odisha", city: "ROurkela" },
// //   })
// //   .then(() => {
// //     console.log("data is saved.");
// //   })
// //   .catch((e) => {
// //     console.log("This failed", e);
// //   });

// // database.ref().on("value", (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // database.ref("age").set(27);
// // database.ref("location/state").set("UP");

// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log("data was removed");
// //   })
// //   .catch((e) => {
// //     "Error", e;
// //   });

// // database
// //   .ref()
// //   .update({
// //     stresslevel: 9,
// //     "job/company": "Amazon",
// //     "location/city": "Seattle",
// //   })
// //   .then(() => {
// //     console.log("Updated");
// //   })
// //   .catch((e) => {
// //     console.log("error", e);
// //   });

// // database
// //   .ref("location/city")
// //   .once("value") //Once runs for a single time;
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log("error", e);
// //   });

// // database.ref().on("value", (snapshot) => {
// //   console.log(snapshot.val());
// //   //on isnt called with promise since once is called multiple times; while promise runs only once.
// // });
