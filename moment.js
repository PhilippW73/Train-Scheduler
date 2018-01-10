var d = new Date();
var time = d.toLocaleTimeString();
console.log(time);
$("#time").text(time);


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDd4pXQD2xWBOD-Woz2pLJBpaa-UnTjUnI",
    authDomain: "train-schedule-67b69.firebaseapp.com",
    databaseURL: "https://train-schedule-67b69.firebaseio.com",
    projectId: "train-schedule-67b69",
    storageBucket: "",
    messagingSenderId: "1050972384330"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  // Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val();
  var trainDestination = $("#destination-input").val();
  var trainFirstTime = $("#firstTrainTime-input").val();
  var trainFrequency = $("#frequency-input").val();
  var nextArrival;
  var minAway;

  // Creates local "temporary" object for holding Train data
  var newTrain = {
    name:         trainName,
    destination:  trainDestination,
    firstTime:    trainFirstTime,
    frequency:    trainFrequency
    // tempNextArrival: nextArrival,
    // tempMinAway: minAway;
  };

  // Uploads train data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTime);
  console.log(newTrain.frequency);
  // console.log(newTrain.tempNextArrival);
  // console.log(newTrain.tempMinAway);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#firstTrainTime-input").val("");
  $("#frequency-input").val("");
});

//Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirstTime = childSnapshot.val().firstTime;
  var trainFrequency = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFirstTime);
  console.log(trainFrequency);

});




