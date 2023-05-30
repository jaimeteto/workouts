import React, { Component } from 'react';
import './App.css';
import ExerciseInfo from './exercise_info.js';
class MinimalEquipment extends Component {
  // Initialize state

  constructor(props){

    super(props);

  this.state = { workouts:[{ name:"name",
                            image:"url",
                        	 id:'1'}],
                   }

  }

  //Fetch passwords after first mount
  componentDidMount() {
    this.getExercises();
  }

  getExercises(){

   var response =[];
   //var images=[];
    var answer = [
   
];
     fetch('/minimalEquipment').then(res =>res.json()).then((res)=>{
      
      for(var exercise in res){
        answer.push(res[exercise]);
        //console.log(res[exercise]);
      }
      return answer;
  }).then((answer)=>{

     for( var val in answer){

      var name = answer[val].name;
     
      var image = answer[val].gifUrl;
      var id = answer[val].id;
      response.push({name:name,image:image, id:id});
      //images.push(answer[val].gifUrl);
      
     }
     return response;
 }
     ).then((response)=>{

     	 this.setState({workouts:response}); 

     });
   


     
     
      
    }
    
      


render() {


//var vals = ["hola"];

//for (var val in values){

//   console.log(val);
// }
    return (
      <div className="inGym">
        
          
            <h1> Minimal Equipment Workouts</h1>



            <div>
              {this.state.workouts.map((tag,i)=><div key = {i}>
                                          
                                          <img src={tag.image} alt="workouts"/>
                                          		<figcaption><b>{tag.name}</b></figcaption>
                                       			<ExerciseInfo  id = {tag.id}/>
                                          		
                                          
                                        </div>
                )}
            </div>
          
          
      </div>
          );
  }
}


export default MinimalEquipment;