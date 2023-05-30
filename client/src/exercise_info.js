import React, { Component } from 'react';
import './App.css';

class ExerciseInfo extends Component {


	constructor(props){
		super(props);
		this.state ={bodyPart:null,
					  target:null,
					  equipment:null}


	}
componentDidMount() {
    this.getExercise();
  }

	getExercise(){


		var id = this.props.id;
		
		fetch(`/exercise/${id}`).then(res =>res.json()).then((exercise)=>{
			this.setState({bodyPart: exercise.bodyPart,
    						target:exercise.target,
    						equipment: exercise.equipment});});
		}


    
	

	render(){

		
		

		return(
			<section>
			<ul>
				
			<li><b>	body part:</b> {this.state.bodyPart}</li>
			<li><b>	Target Muscle:</b> {this.state.target}</li>
			<li><b>equipment:</b>{this.state.equipment}</li>
				

			</ul>

			</section>
			
		)
	}

  }



export default ExerciseInfo;