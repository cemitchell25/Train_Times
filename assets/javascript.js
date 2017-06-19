  
 $(document).ready(function() { 

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
		var trainTime = moment($("#time-input").val().trim(), "HH:mm").subtract(10, "years").format("X");;
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

		  console.log(trainName);
		  console.log(trainDest);
		  console.log(trainTime);
		  console.log(trainFreq);


		var diffTime = moment().diff(moment.unix(trainTime), "minutes");
		var timeRemainder = moment().diff(moment.unix(trainTime), "minutes") % trainFreq;
		var minutes = trainFreq - timeRemainder;

		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
		
			// Test for correct times and info
			console.log(minutes);
			console.log(nextTrainArrival);
			console.log(moment().format("hh:mm A"));
			console.log(nextTrainArrival);
			console.log(moment().format("X"));



  $("#recent-train > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDest + "</td><td>" +
 trainFreq + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

})});