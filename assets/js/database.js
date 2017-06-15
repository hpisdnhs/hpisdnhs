// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyCID96dTRx69zOeZNfOH81xQQIUD6jvPYs",
  authDomain: "hpisd-nhs.firebaseapp.com",
  databaseURL: "https://hpisdnhs.firebaseio.com",
  storageBucket: "hpisd-nhs.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
