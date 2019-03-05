import React from 'react';
//import render from 'react-dom';
import {InputGroup,Jumbotron,Container,FormControl,Button} from 'react-bootstrap';

export default class todoInput extends React.Component{
	constructor(props){
	super(props);

	this.state={ value:''};

	this.changeHandler= this.changeHandler.bind(this);
	this.addTodo=this.addTodo.bind(this);
	}
	
	changeHandler(e){
	//	console.log("hemadri");
	this.setState({value:e.target.value})
	}

	addTodo(todo){
		//console.log("task is :", todo);
		if(todo.length>0){
			this.props.addTodo(todo);
			this.setState({value:''});
		}
	}
	render(){
		return(
			<div>
				<Container>
					<Jumbotron>
						<InputGroup size="md">
 						   <InputGroup.Prepend>
      							<InputGroup.Text>Enter your Task:</InputGroup.Text>
					    	</InputGroup.Prepend>
    						<FormControl  value={this.state.value} onChange={this.changeHandler} />
    						<Button variant="info" onClick={()=>{this.addTodo(this.state.value)}}> Add Task</Button>

						  </InputGroup>
						  <h6>{this.state.value}</h6>
					</Jumbotron>
				</Container>
			</div>
		);
	}
}

