import React from 'react';
import {Button,Jumbotron,Container} from "react-bootstrap";
import "./todoItem.css";

export default class todoItem extends React.Component{
	constructor(props){
		super(props);
	}	

	removeTodo(id){
		this.props.removeTodo(id);
	}

	render(){
		return(
			
				
				<div>
					
					<Container>
					< div class="Jumbotron" >
						
				<h6>{this.props.todo.text} </h6>
				<div className="button">
				<Button variant="info" size="sm" onClick={(e)=> this.removeTodo(this.props.id)} > Remove Task</Button>  
				</div>
				
					</div>
					</Container>
					

				</div>
		
			
			
				
			);
		}
	}
