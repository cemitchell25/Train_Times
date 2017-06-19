  
  var config = {
    apiKey: "AIzaSyBnbTX20WsPSOw0qCAaqifGkr_a7nBhZtE",
    authDomain: "train-time-d3789.firebaseapp.com",
    databaseURL: "https://train-time-d3789.firebaseio.com",
    projectId: "train-time-d3789",
    storageBucket: "train-time-d3789.appspot.com",
    messagingSenderId: "617847431848"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).on("click", "#add-train", function(event) {

  event.preventDefault();
  // Grabs user input
  var trainName = $("#train-input").val().trim();
  var trainDest = $("#destination-input").val().trim();
  var trainTime = $("#time-input").val().trim();
  var trainFreq = $("#frequency-input").val().trim();
  // Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDest,
    time: trainTime,
    frequency: trainFreq
  };
  // Uploads employee data to the database
  database.ref().push(newTrain);
  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
  // Alert
  alert("Train successfully added");
  // Clears all of the text-boxes
  $("#train-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFreq = childSnapshot.val().frequency;
  // Employee Info
  console.log(trainName);
  console.log(trainDest);
  console.log(trainTime);
  console.log(trainFreq);


    // var tFrequency = trainFreq;
    // // Time is 3:30 AM
    // var firstTime = "00:00";
    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    // console.log(firstTimeConverted);
    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);
    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);
    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


  // Prettify the employee start
  // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
  // // Calculate the months worked using hardcore math
  // // To calculate the months worked
  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);
  // // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);
  // // Add each train's data into the table
  $("#recent-train > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
 trainFreq + "</td><td>" + trainTime + "</td><td>" + trainTime + "</td></tr>");
});