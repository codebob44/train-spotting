// ========================================== START CODING BELOW!!
    // Initialize Firebase
   
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtHiJ_NYiKOdcCPs3Gozt9Ka9ZxoU2vC8",
    authDomain: "train-spotting-5a027.firebaseapp.com",
    databaseURL: "https://train-spotting-5a027.firebaseio.com",
    projectId: "train-spotting-5a027",
    storageBucket: "train-spotting-5a027.appspot.com",
    messagingSenderId: "522197898472"
  };
  firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();
    // Initial Values
    var name = "";
    var destination = "";
    var time = 0;
    var frequency = "";
    var now = moment();
    // Capture Button Click
    $("#add-train").on("click", function(event) {
      event.preventDefault();
      console.log(event);
      console.log(now);
      // Grabbed values from text boxes
      name = $("#train-name-input").val().trim();
      console.log(name);
      destination = $("#destination-input").val().trim();
      console.log(destination);
      time = $("#first-train-time-input").val().trim();
      console.log(time);
      frequency = $("#frequency-input").val().trim();
      console.log(frequency);
      // Code for handling the push
      database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
      });

    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());
      // full list of items to the well
      $("#new-train-data").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().frequency + "</td><td>" + childSnapshot.val().time + "</td>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


    // database.ref().on("value", function(snapshot) {
    //   // storing the snapshot.val() in a variable for convenience
    //   var sv = snapshot.val();

    //   for( var key in sv ){
    //     var thisObject = sv[key];

    //     console.log(thisObject);
    //   }
      
    //   // Getting an array of each key In the snapshot object
    //   var svArr = Object.keys(sv);
    //   // Finding the last user's key
    //   var lastIndex = svArr.length - 1;
    //   var lastKey = svArr[lastIndex];
    //   // Using the last user's key to access the last added user object
    //   var lastObj = sv[lastKey]
    //   // Console.loging the last user's data
    //   console.log(lastObj.name);
    //   console.log(lastObj.destination);
    //   console.log(lastObj.time);
    //   console.log(lastObj.frequency);
    //   // Change the HTML to reflect
    //   $("#new-train-data").append("<tr><td>" + lastObj.name + "</td><td>" + lastObj.destination + "</td><td>" + lastObj.time + "</td><td>" + lastObj.frequency + "</td>");
    // //   Handle the errors
    // }, function(errorObject) {
    //   console.log("Errors handled: " + errorObject.code);
    // });
    //   $("#name-display").html(lastObj.name);
    //   $("#destination-display").html(lastObj.destination);
    //   $("#time-display").html(lastObj.time);
    //   $("#frequency-display").html(lastObj.frequency);

