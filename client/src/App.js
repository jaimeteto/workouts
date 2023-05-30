import React, { Component } from 'react';
import './App.css';
import InGymWorkouts from './inGymWorkouts.js';
import MinimalEquipment from './minimalEquipment.js';


class Button extends Component{



  render(){
    return(
      <button{...this.props}>
        {this.props.name}
      </button>

      );
  }
}


class App extends Component {
  // Initialize state

  constructor(props){

    super(props);

  this.state = { clicked1: false,
                  clicked2:false
                  
                   }
   this.handleClick1 = this.handleClick1.bind(this);
   this.handleClick2 = this.handleClick2.bind(this);
    
  }

  

  handleClick1(){

    this.setState({
      clicked1:!this.state.clicked1,

      
    });
  }

 handleClick2(){

    this.setState({
      clicked2:!this.state.clicked2,
      
    });
  }
  

 


render() {




    return (
      <div className="App">
        
          
            <h1>Workout Routines</h1>

           

            <div>
                <Button onClick={this.handleClick1} name = "inGym"/>
               <Button onClick={this.handleClick2} name = "Minimal Equipment"/>
               
              {this.state.clicked1 &&(<InGymWorkouts/>)}
              {this.state.clicked2 && (<MinimalEquipment/>)}
            </div>
                    
          

           

            
          <cite>ExerciseDB API created by Justin Mozley</cite>
          
      </div>
          );
  }
}


export default App;
