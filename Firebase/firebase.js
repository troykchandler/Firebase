$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDn1PWgYz0-sR7BU3Kc-sR2p8pzl8RnYTs",
    authDomain: "train-project-3cd6a.firebaseapp.com",
    databaseURL: "https://train-project-3cd6a.firebaseio.com",
    projectId: "train-project-3cd6a",
    storageBucket: "train-project-3cd6a.appspot.com",
    messagingSenderId: "596874459970"
  };
  firebase.initializeApp(config);
 
  var traindb = firebase.database();

$("#arrival-input").on("click", funtion(event)){
   
    event.preventDefault();
//gatherig form info 
// let searchtrain= $("#your-train-name").val().trim();
// let destination=$("#destination-input").val().trim();
// let arrival=$("arrival-input").val().trim();
// var yourTrain={
name = $("#your-train-input").val().trim();
destination = $("#destination-input").val().trim();
arrivalTime = $("#arrival-input-input").val().trim();
    
};
trainData.ref().push({
  name:name,
  destination:destination,
  arrivalTime:arrivalTime
});


// console.log(yourTrain.name);
// console.log(yourTrain.destination);
// console.log(ypurTrain.arrival);


}



document.addEventListener("DOMContentLoaded" , event =>{

        const app = firebase.app();
        console.log(app)


});