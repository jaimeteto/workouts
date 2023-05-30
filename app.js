const express = require('express')
const fetch = require('node-fetch')
const path = require('path');
const category = require('./mod1.js') // used for grouping workouts
//const testdata = require('./testdata.json')
const createRoutine = require('./mod2.js') 
const admin = require('firebase-admin'); // uncomment to use Firebase
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'client/build')));



// Firebase starter code appears below

 let serviceAccount = require('./hw3-450-firebase-adminsdk-fhyzr-e3bb6a16e8.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();
let docRef = db.collection('workouts');
let docRef2 = db.collection('bodyparts');

class allWorkouts{
  constructor(url){
    this.url = url;
    
    
  }

  //used to  all data from the apI
  async workouts(){
    const url = this.url;
    const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '448630ed1amsh7b3f730cded6732p1b29afjsnad6d8735ed0e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }};
     var workouts = await fetch(url,options).then(res => {return res.json()}).catch(function(error){
       console.log("error retrievind data"+error)

     })

     return workouts
   }
}

//storing data into database


//const bodyParts= 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const completeData = 'https://exercisedb.p.rapidapi.com/exercises';
var data1 = new allWorkouts(completeData);/// dat1 contains all exercises
//var bodyPartData = new allWorkouts(bodyParts);



//storing results in data base with respective ids
var alldata = data1.workouts().then((res)=>{
  
  for (var exercise in res){
    //console.log(res[exercise]);
    docRef.doc(res[exercise].id).set(res[exercise]);
  }
  });




//storing part in array
const bodyParts1 = ["back",
"cardio",
"chest",
"lower arms",
"lower legs",
"neck",
"shoulders",
"upper arms",
"upper legs",
"waist"];
//var bodyParts1 = bodyPartData.workouts().then(res=> bodyParts1 = res);


//////////////////////////////////////////


//gets
app.get('/', (req, res) => {
  res.send("Workouts routines")
})

app.get('/exercise/:id',(req, res) => {


  //returns specified exercise


  var id= req.params.id;
  async function getValue(){
  var value = await docRef.doc(id).get();
  res.send(value.data());
}
 getValue();
 
})

//returns a list of  5 or (numberofExercises) number of exercises that that use minimal squipment(at home workouts)
app.get('/minimalEquipment/:bodyPart?/:numberOfExercises?', (req, res) => {


//ERORR HANDLING
///////////////////////////////////////////////////////////////////////////////////////////////////////
    var numberOfExercises= req.params.numberOfExercises;
    var bodyPart= req.params.bodyPart;

  //if number is not defined return error

  if(typeof numberOfExercises =='undefined'){

    numberOfExercises = 5;
  }
//if number of exercises is not a number return error
  if(isNaN(numberOfExercises) ){

   return res.status(404).send({message:"Not  Found"});
 }

 
//if body part was ignored used default value
  if(typeof bodyPart =='undefined'){
    
    bodyPart= "none";
  }
//if bodypart param is not in the API return error

  //if((!Object.values(bodyParts1).includes(bodyPart)) && (bodyPart != "none")) {
    if((!bodyParts1.includes(bodyPart)) && (bodyPart != "none")) {
      
      console.log("in here ");
      return res.status(404).send({message:"Not  Found"});
  }

  //end of error handling

  //////////////////////////////////////////////////////////////////////////////////////

///fucntion that groups and creater the routines
  //group all "minimal equipment and create  and return a routine "
  async function grouptWorkouts(bodyPart, numberOfExercises=5){
  
//getting all data from database
async function getData(){
  return docRef.get()
}
var alldata2 = [];

////group all workouts that do not require gym equipment
var alldata1 = await docRef.where('equipment','in',['assisted','body weight']).get();
alldata1.forEach(doc=>{

  alldata2.push(doc.data());
})



// creating workout routine

  var finalRoutine = await createRoutine(alldata2,bodyPart,numberOfExercises);

//returns an object with the routine 
  return finalRoutine;

  }

  var result = grouptWorkouts(bodyPart).then(result =>res.send( result));

  

})





// return 5 or (numberOfExercises) number of exercises that use gym equipment
app.get('/inGym/:bodyPart?/:numberOfExercises?', (req, res) => {
  

  //error handling
  ////////////////////////////////////////////////////
   var numberOfExercises= req.params.numberOfExercises;
  var bodyPart= req.params.bodyPart;

    
  if(typeof numberOfExercises =='undefined'){

    numberOfExercises = 5;
  }

 

  if(typeof bodyPart =='undefined'){
    //console.log("in if statement");
    bodyPart= "none";
  }

  //if number of exercises is not a number return error
  if(isNaN(numberOfExercises) ){

   return res.status(404).send({message:"Not  Found"});
 }

//if bodypart param is not in the API return error

  if(!(bodyParts1.includes(bodyPart)) && (bodyPart != "none")) {
      

      return res.status(404).send({message:"Not  Found"});
  }
//end of error handling
////////////////////////////////////////////////////////////////

///fucntion that groups and creater the routines
  //group all "minimal equipment and create  and return a routine "
  async function grouptWorkouts(bodyPart, numberOfExercises=5){


  var alldata2 = [];

////group all workouts that do not require gym equipment
var alldata1 = await docRef.where('equipment','in',['sled machine','barbell','dumbbell','smith machine','olympic barbell','cable','elliptical machine']).get();
alldata1.forEach(doc=>{

  alldata2.push(doc.data());
})


// creating workout routine

  var finalRoutine = await createRoutine(alldata2,bodyPart,numberOfExercises);

//returns an object with the routine 
  return finalRoutine;

  }


  var result = grouptWorkouts(bodyPart).then(result =>res.send( result));





})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;